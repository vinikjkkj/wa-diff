__d(
  "BaseDeserializePHPQueryData",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = /^([-_\w]+)((?:\[[-_\w]*\])+)=?(.*)/;
    function l(e) {
      return e === "hasOwnProperty" || e === "__proto__" ? "\uD83D\uDF56" : e;
    }
    function s(t, n) {
      if (t == null || t === "") return {};
      for (
        var r = {},
          o = t.replace(/%5B/gi, "[").replace(/%5D/gi, "]"),
          a = o.split("&"),
          i = Object.prototype.hasOwnProperty,
          s = 0,
          u = a.length;
        s < u;
        s++
      ) {
        var c = a[s].match(e);
        if (c) {
          var _ = c[2].split(/\]\[|\[|\]/).slice(0, -1),
            f = c[1],
            g = n(c[3] || "");
          _[0] = f;
          for (var h = r, y = 0; y < _.length - 1; y++) {
            var C = l(_[y]);
            if (C) {
              if (!i.call(h, C)) {
                var b = _[y + 1] && !_[y + 1].match(/^\d{1,3}$/) ? {} : [];
                if (((h[C] = b), h[C] !== b)) return r;
              }
              h = h[C];
            } else
              (_[y + 1] && !_[y + 1].match(/^\d{1,3}$/)
                ? h.push({})
                : h.push([]),
                (h = h[h.length - 1]));
          }
          h instanceof Array && _[_.length - 1] === ""
            ? h.push(g)
            : (h[l(_[_.length - 1])] = g);
        } else {
          var d = a[s].indexOf("=");
          if (d === -1) r[n(a[s])] = null;
          else {
            var m = a[s].substring(0, d),
              p = a[s].substring(d + 1);
            r[n(m)] = n(p);
          }
        }
      }
      return r;
    }
    i.deserialize = s;
  },
  66,
);
