class Javabeens
    constructor: (@id) ->
        grinded = false

        @grind = ->
            grinded = true
            console.log "Grinding #{@id} java beens"

        @make = ->
            if !grinded then console.log "Cant make coffee from full beens, grind em first"
            else console.log "Hummm... smells nice!"
            grind = false

module.exports = Javabeens