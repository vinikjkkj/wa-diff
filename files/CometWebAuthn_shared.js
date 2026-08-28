__d(
  "CometWebAuthn.shared",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
        return t.map(function (e) {
          return { id: u(e.id), type: e.type };
        });
      },
      l = function (t) {
        return m(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
      },
      s = function (t) {
        return new Uint8Array(t.length).map(function (e, n) {
          return t.charCodeAt(n);
        });
      },
      u = function (t) {
        return s(atob(c(t)));
      },
      c = function (t) {
        return (t + "===")
          .slice(0, t.length + ((4 - (t.length % 4)) % 4))
          .replace(/-/g, "+")
          .replace(/_/g, "/");
      };
    function d(e) {
      var t = btoa(e);
      return t.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    }
    var m = function (t) {
      var e = new Uint8Array(t),
        n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        r = e.length % 3;
      function o(e) {
        return (
          n.charAt((e >> 18) & 63) +
          n.charAt((e >> 12) & 63) +
          n.charAt((e >> 6) & 63) +
          n.charAt(e & 63)
        );
      }
      for (var a = "", i = 0, l = e.length - r; i < l; i += 3) {
        var s = (e[i] << 16) + (e[i + 1] << 8) + e[i + 2];
        a += o(s);
      }
      var u;
      switch (r) {
        case 1:
          ((u = e[e.length - 1]),
            (a += n.charAt(u >> 2)),
            (a += n.charAt((u << 4) & 63)),
            (a += "=="));
          break;
        case 2:
          ((u = (e[e.length - 2] << 8) + e[e.length - 1]),
            (a += n.charAt(u >> 10)),
            (a += n.charAt((u >> 4) & 63)),
            (a += n.charAt((u << 2) & 63)),
            (a += "="));
          break;
        default:
          break;
      }
      return a;
    };
    ((i.encodeCredentials = e),
      (i.bufferEncode = l),
      (i.string2buffer = s),
      (i.base64ToBuffer = u),
      (i.Base64DecodeUrl = c),
      (i.base64UrlEncode = d),
      (i.encodeByteArray = m));
  },
  66,
);
