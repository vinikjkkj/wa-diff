__d(
  "WebBloksTextInputMaskExtensionHandlerUtils",
  ["WebBloksTextInputHelpers", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return e.replace(/[^0-9]/g, "");
    }
    function s(t, n) {
      var r = o("WebBloksUtils").findExtension(
        t.extensions,
        "bk.components.TextInputMaskExtension",
      );
      if (r != null) {
        var a = r.get("mask");
        if (!(a.length <= 0)) {
          var i = function (n, r) {
              for (
                var t = e(r, a), o = t.split(""), i = a.split(""), l = "";
                o.length && i.length;
              ) {
                var s = i.shift();
                if (s === "#") {
                  var u;
                  l += (u = o.shift()) != null ? u : "";
                } else l += s != null ? s : "";
              }
              if (!i.includes("#")) {
                var c = l + i.join("");
                return n.length === a.length && r.length < a.length
                  ? l.slice(0, -1)
                  : c;
              }
              return l;
            },
            l = Object.prototype.hasOwnProperty.call(
              o("WebBloksTextInputHelpers")
                .WEBBLOKS_TEXT_INPUT_TYPES_WITH_INPUT_MODES,
              t.type,
            )
              ? void 0
              : "text";
          return { onBeforeChange: i, maxLength: a.length, typeOverride: l };
        }
      }
    }
    l.getTextInputMaskExtensionProps = s;
  },
  98,
);
