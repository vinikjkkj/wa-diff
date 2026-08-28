__d(
  "WebBloksTextInputMaskExtensionHandlerUtils",
  ["WebBloksConstants", "WebBloksTextInputHelpers", "WebBloksUtils"],
  function (t, n, r, o, a, i, l) {
    var e = "8",
      s = "#",
      u = "\u3419";
    function c(e, t) {
      return e.replace(/[^0-9]/g, "");
    }
    function d(t) {
      var n = o("WebBloksUtils").findExtension(
        t.get(o("WebBloksConstants").EXTENSIONS_ATTRIBUTE_KEY),
        u,
      );
      if (n != null) {
        var r = n.get(s);
        if (!(r.length <= 0)) {
          var a = function (t, n) {
              for (
                var e = c(n, r), o = e.split(""), a = r.split(""), i = "";
                o.length && a.length;
              ) {
                var l = a.shift();
                if (l === "#") {
                  var s;
                  i += (s = o.shift()) != null ? s : "";
                } else i += l != null ? l : "";
              }
              if (!a.includes("#")) {
                var u = i + a.join("");
                return t.length === r.length && n.length < r.length
                  ? i.slice(0, -1)
                  : u;
              }
              return i;
            },
            i = Object.prototype.hasOwnProperty.call(
              o("WebBloksTextInputHelpers")
                .WEBBLOKS_TEXT_INPUT_TYPES_WITH_INPUT_MODES,
              t.get(e),
            )
              ? void 0
              : "text";
          return { onBeforeChange: a, maxLength: r.length, typeOverride: i };
        }
      }
    }
    l.getTextInputMaskExtensionProps = d;
  },
  98,
);
