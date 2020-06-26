<template>
    <div class="checkout__configure-3d-model">
        <Canvas3D></Canvas3D>
        <div class="configure-3d-model__measurements">
            <div class="field">
                <label class="label">Objektname</label>
                <div class="control">
                    <input class="input is-primary" type="text" placeholder="Objektname">
                </div>
            </div>

            <div class="configure-3d-model__measurements">
                <div class="measurements__info">
                    <h3>Dein Objekt hat die folgenden Abmessungen:</h3>
                    <strong>318,24 x 34 x 152,69</strong>
                </div>

                <div class="field">
                    <label class="label">Welche Längeneinheit wurde verwendet?</label>
                    <div class="control">
                        <label class="radio">
                            <input type="radio" value="mm" name="unit" v-model="unit">
                            MM
                        </label>
                        <label class="radio">
                            <input type="radio" value="cm" name="unit" v-model="unit">
                            CM
                        </label>
                        <label class="radio">
                            <input type="radio" value="inch" name="unit" v-model="unit">
                            INCH
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="configure-3d-model__materials">
            <div class="container px-2 py-2">
                <div class="scale-slider">
                    SLIDER
                </div>
                <div class="measurements-info">
                    <h3>Dein Objekt hat die folgenden Abmessungen:</h3>
                    <strong>318,24 x 34 x 152,69</strong>
                    <p>Bitte wählen sie material und farben</p>
                </div>
            </div>
            <div class="materials__select">
                <div class="select__material-option"
                     v-for="(material, index) in materials"
                     v-bind:key="index"
                     @click="selected = index" :class="{'is-selected' : index === selected}">
                    <div class="material-option__content">
                        <div class="material-option__image">
                            <img :src="material.image">
                        </div>
                        <div class="material-option__data">
                            <span class="material-option__label">{{ material.name }}</span>
                            <span class="material-option__description">{{ material.description }}</span>
                        </div>
                        <div class="material-option__color-select">
                            <div class="dropdown" :class="{'is-active': material.dropdownIsOpen}">
                                <div class="dropdown-trigger"
                                     @click="material.dropdownIsOpen = !material.dropdownIsOpen"
                                     :style="{'backgroundColor': material.selectedColor}">
                                    <div class="dropdown-icon">
                                        <img src="@/assets/img/chevron-right.svg" style="transform: rotate(90deg);">
                                    </div>
                                </div>
                                <div class="dropdown-menu">
                                    <div class="dropdown-content" @click="material.dropdownIsOpen = false">
                                        <div class="dropdown-item"
                                             v-for="(color, indexColor) in material.colors"
                                             v-bind:key="'dropdown' + index + indexColor"
                                             @click="material.selectedColor = color.color"
                                             :style="{'backgroundColor': color.color}">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span class="material-option__price">{{ price }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Canvas3D from "./Canvas3D";

    export default {
        name: "Configure3DModel",
        components: {Canvas3D},
        data() {
            return {
                unit: "mm",
                price: 526.54,
                color: "#000000",
                selected: 0,
                materials: [
                    {
                        "name": "Kunststoff-Sintern",
                        "description": "stabiles, flexibles Plastik",
                        "image": "https://via.placeholder.com/150x150/BDBDBD/999999",
                        "selectedColor": "#000000",
                        dropdownIsOpen: false,
                        "colors": [
                            {
                                "name": "Black",
                                "color": "#000000"
                            },
                            {
                                "name": "Green",
                                "color": "#6FD6BD"
                            },
                            {
                                "name": "White",
                                "color": "#FFFFFF"
                            }
                        ]
                    },
                    {
                        "name": "Verklebter Kunststoff",
                        "description": "feines, körniges Plastik",
                        "image": "https://via.placeholder.com/150x150/F48C774/999999",
                        dropdownIsOpen: false,
                        "colors": [
                            {
                                "name": "Black",
                                "color": "#000000"
                            },
                            {
                                "name": "Green",
                                "color": "#6FD6BD"
                            },
                            {
                                "name": "White",
                                "color": "#FFFFFF"
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>