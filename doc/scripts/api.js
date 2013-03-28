define("api", ["mass"], function() {

    return {
        core: "require,define,config, mix,slice,type,log,oneObject,bind,unbind,html,head,rword,mass,getUid,exports".match($.rword).sort(),
        lang: ("String.contains, String.startsWith, String.endsWith,String.repeat,String.byteLen,String.truncate,String.camelize,String.underscored," +
                "String.capitalize, String.escapeHTML, String.unescapeHTML,String.stripTags,String.stripScripts,String.pad," +
                "Array.clone,Array.contains,Array.remove,Array.removeAt,Array.shuffle,Array.random,Array.min,Array.max,Array.pluck,Array.sortBy," +
                "Array.compact,Array.diff,Array.merge,Array.union,Array.intersect,Array.unique,Array.ensure,Array.inGroupsOf,Array.flatten," +
                "Number.limit,Number.nearer,Number.round,Object.subset,Object.forEach,Object.map,Object.clone,Object.merge,Object.without," +
                "isPlainObject,isNative,isEmptyObject,isArrayLike,format,range,quote,dump,parseJS,parseJSON,parseXML,isArray,isFunction,each,map").match($.rword).sort(),
        "class": ["factory"],
        "节点模块": {
            "fn": {
                "init": "function",
                "mass": "number",
                "length": "number",
                "valueOf": "function",
                "toString": "function",
                "slice": "function",
                "get": "function",
                "eq": "function",
                "gt": "function",
                "lt": "function",
                "first": "function",
                "even": "function",
                "odd": "function",
                "last": "function",
                "each": "function",
                "map": "function",
                "collect": "function",
                "clone": "function",
                "html": "function",
                "text": "function",
                "push": "function",
                "unshift": "function",
                "pop": "function",
                "shift": "function",
                "splice": "function",
                "sort": "function",
                "reverse": "function",
                "remove": "function",
                "empty": "function",
                "append": "function",
                "appendTo": "function",
                "prepend": "function",
                "prependTo": "function",
                "before": "function",
                "beforeTo": "function",
                "after": "function",
                "afterTo": "function",
                "replace": "function",
                "replaceTo": "function",
                "data": "function",
                "removeData": "function",
                "find": "function",
                "filter": "function",
                "not": "function",
                "is": "function",
                "has": "function",
                "closest": "function",
                "index": "function",
                "parent": "function",
                "parents": "function",
                "parentsUntil": "function",
                "next": "function",
                "nextAll": "function",
                "nextUntil": "function",
                "prev": "function",
                "prevAll": "function",
                "prevUntil": "function",
                "children": "function",
                "siblings": "function",
                "contents": "function"
            },
            "implement": "function",
            "extend": "function",
            "match": "function",
            "parseHTML": "function"
        },
        query: "isXML,contains,getText,unique,query".match($.rword).sort(),
        "数据缓存模块": {
            "data": "function",
            "parseData": "function",
            "removeData": "function",
            "mergeData": "function"
        },
        "样式模块": {
            "fn": {
                "css": "function",
                "width": "function",
                "height": "function",
                "innerWidth": "function",
                "innerHeight": "function",
                "outerWidth": "function",
                "outerHeight": "function",
                "offset": "function",
                "position": "function",
                "offsetParent": "function",
                "scrollParent": "function",
                "scrollLeft": "function",
                "scrollTop": "function"
            },
            "cssName": "function",
            "scrollbarWidth": "function",
            "css": "function"
        },
        "属性模块": {
            "fn": {
                "addClass": "function",
                "hasClass": "function",
                "removeClass": "function",
                "toggleClass": "function",
                "replaceClass": "function",
                "val": "function",
                "removeAttr": "function",
                "removeProp": "function",
                "attr": "function",
                "prop": "function",
                "class": "function"
            },
            "attr": "function",
            "prop": "function",
            "attrMap": "object",
            "propMap": "object",
            "_remove_attr": "function",
            "propAdapter": "object",
            "valAdapter": "object"
        },
        "事件模块": {
            "fn": {
                "on": "function",
                "bind": "function",
                "off": "function",
                "unbind": "function",
                "toggle": "function",
                "hover": "function",
                "delegate": "function",
                "live": "function",
                "one": "function",
                "undelegate": "function",
                "die": "function",
                "fire": "function",
                "contextmenu": "function",
                "click": "function",
                "dblclick": "function",
                "mouseout": "function",
                "mouseover": "function",
                "mouseenter": "function",
                "mouseleave": "function",
                "mousemove": "function",
                "mousedown": "function",
                "mouseup": "function",
                "mousewheel": "function",
                "abort": "function",
                "error": "function",
                "load": "function",
                "unload": "function",
                "resize": "function",
                "scroll": "function",
                "change": "function",
                "select": "function",
                "reset": "function",
                "submit": "function",
                "blur": "function",
                "focus": "function",
                "focusin": "function",
                "focusout": "function",
                "keypress": "function",
                "keydown": "function",
                "keyup": "function"
            },
            "eventAdapter": {
                "focus": "object",
                "blur": "object",
                "beforeunload": "object",
                "focusin": "object",
                "focusout": "object",
                "mousewheel": "object"
            },
            "event": {
                "bind": "function",
                "unbind": "function",
                "fire": "function",
                "filter": "function",
                "dispatch": "function",
                "fix": "function"
            },
            "Event": "function",
            "EventTarget": "object",
            "eventSupport": "function"
        },
        "数据交互模块": {
            "get": "function",
            "post": "function",
            "getScript": "function",
            "getJSON": "function",
            "upload": "function",
            "serialize": "function",
            "serializeArray": "function",
            "param": "function",
            "ajax": {
                "uniqueNumber": "number",
                "defineEvents": "function",
                "bind": "function",
                "unbind": "function",
                "fire": "function",
                "isLocal": "boolean",
                "@data_14": "object"
            },
            "XHR": {
                "inherit": "function",
                "implement": "function",
                "extend": "function",
                "toString": "function"
            },
            "xhr": "function"
        },
        "fx": ["fn.fx", "fn.stop"],
//            "fn": { 
//                "fx": "function",
//                "stop": "function",
//                "delay": "function",
//                "slideDown": "function",
//                "slideUp": "function",
//                "slideToggle": "function",
//                "fadeIn": "function",
//                "fadeOut": "function",
//                "fadeToggle": "function",
//                "show": "function",
//                "hide": "function",
//                "puff": "function"
//            },
//            "easing": "object",
//            "fx": "function",
//            "show": "function",
//            "hide": "function",
//            "toggle": "function"
//        },
        "flow": {
            "Flow": "function",
            "flow.bind": "function",
            "flow.unbind": "function",
            "flow.fire": "function",
            "flow.find": "function",
            "flow.append": "function",
            "flow.reduce": "function"
        },
        "特征侦探模块": {}
    }



})
