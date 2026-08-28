__d(
  "MWBroadcastChannelPolyfill",
  [
    "FBLogger",
    "LocalStorageWrapper",
    "MessengerLogHistory",
    "Random",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = o("MessengerLogHistory").getInstance("client_init");
    function s(t) {
      e.debug("[MWBroadcastChannelPolyfill] " + t);
    }
    function u(e) {
      r("FBLogger")("messenger_web").mustfix(e);
    }
    var c = {},
      d = o("LocalStorageWrapper").getStorage(s);
    function m(e) {
      var t = "$BroadcastChannel$" + e + "$",
        n = !1,
        a = function (n) {
          var e, r;
          if (n.storageArea === d) {
            var o = n.newValue;
            if (
              !(o == null || o === "") &&
              ((e = n.key) == null ? void 0 : e.substring(0, t.length)) === t
            ) {
              var a = JSON.parse(o);
              (r = c[t]) == null ||
                r.forEach(function (e) {
                  e({ data: a });
                });
            }
          }
        };
      return (
        window.addEventListener("storage", a),
        {
          addEventListener: function (n, r) {
            ((c[t] = c[t] || new Set()), c[t].add(r));
          },
          close: function () {
            n || ((n = !0), (c = {}), window.removeEventListener("storage", a));
          },
          postMessage: function (a) {
            if (n) {
              r("FBLogger")("ls_web_init").mustfix(
                "Broadcast channel is closed",
              );
              return;
            }
            var e = JSON.stringify(a),
              i = t + String(Date.now()) + "$" + String(r("Random").uint32());
            (o("LocalStorageWrapper").setItemGuarded(d, i, e, u),
              r("setTimeout")(function () {
                o("LocalStorageWrapper").removeItemGuarded(d, i, u);
              }, 500));
          },
          removeEventListener: function (n, r) {
            var e;
            (e = c[t]) == null || e.delete(r);
          },
        }
      );
    }
    l.default = m;
  },
  98,
);
