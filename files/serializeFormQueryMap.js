__d(
  "serializeFormQueryMap",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return [].concat(
        Array.from(e.querySelectorAll("input")),
        Array.from(e.querySelectorAll("select")),
        Array.from(e.querySelectorAll("textarea")),
        Array.from(e.querySelectorAll("button")),
      );
    }
    function l(t, n) {
      e(t).forEach(function (e) {
        if (!(!e.name || e.disabled)) {
          var t = e.type;
          if (
            !(
              t === "submit" ||
              t === "reset" ||
              t === "button" ||
              t === "image" ||
              t === "file"
            ) &&
            !((t === "radio" || t === "checkbox") && !e.checked)
          ) {
            if (e.nodeName === "SELECT") {
              for (var r = 0, o = e.options.length; r < o; r++) {
                var a = e.options[r];
                a.selected && n("select", e.name, a.value);
              }
              return;
            }
            n(t, e.name, e.value || "");
          }
        }
      });
    }
    function s(e) {
      var t = {};
      return (
        l(e, function (e, n, r) {
          var o = t[n];
          Object.prototype.hasOwnProperty.call(t, n)
            ? Array.isArray(o)
              ? o.push(r)
              : (t[n] = [o, r])
            : (t[n] = r);
        }),
        t
      );
    }
    a.exports = s;
  },
  null,
);
