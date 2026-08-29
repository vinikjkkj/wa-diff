__d(
  "WebBloksTextInputMaskExtensionHandlerUtils",
  ["WebBloksTextInputHelpers", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.replace(/[^0-9]/g, "");
    }
    function s(t) {
      var n = o("WebBloksUtils").findExtension(
        t.get("extensions"),
        "bk.components.TextInputMaskExtension",
      );
      if (n != null) {
        var r = n.get("mask");
        if (!(r.length <= 0)) {
          var a = function (n, o) {
              for (
                var t = e(o, r), a = t.split(""), i = r.split(""), l = "";
                a.length && i.length;
              ) {
                var s = i.shift();
                if (s === "#") {
                  var u;
                  l += (u = a.shift()) != null ? u : "";
                } else l += s != null ? s : "";
              }
              if (!i.includes("#")) {
                var c = l + i.join("");
                return n.length === r.length && o.length < r.length
                  ? l.slice(0, -1)
                  : c;
              }
              return l;
            },
            i = Object.prototype.hasOwnProperty.call(
              o("WebBloksTextInputHelpers")
                .WEBBLOKS_TEXT_INPUT_TYPES_WITH_INPUT_MODES,
              t.get("type"),
            )
              ? void 0
              : "text";
          return { onBeforeChange: a, maxLength: r.length, typeOverride: i };
        }
      }
    }
    l.getTextInputMaskExtensionProps = s;
  },
  98,
);
