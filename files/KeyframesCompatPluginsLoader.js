__d(
  "KeyframesCompatPluginsLoader",
  ["Bootloader", "FBLogger", "KeyframesPluginLogger", "Promise", "flatbuffers"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        TrimPath: function (t) {
          return r("Bootloader").loadModules(
            ["KeyframesCompatPluginTrimPath", "KeyframesPluginTrimPathSchema"],
            t,
            "KeyframesCompatPluginsLoader",
          );
        },
        RandomSubdocument: function (t) {
          return r("Bootloader").loadModules(
            [
              "KeyframesCompatPluginRandomSubdocument",
              "KeyframesPluginRandomSubdocumentSchema",
            ],
            t,
            "KeyframesCompatPluginsLoader",
          );
        },
      };
    function u(e, t) {
      return s[e] == null
        ? (r("FBLogger")("KeyframesCompatPluginsLoader").warn(
            "Attempted to load undefined module: %s",
            e,
          ),
          null)
        : s[e](t);
    }
    function c(t) {
      var r = t.map(function (t) {
        return new (e || (e = n("Promise")))(function (e, n) {
          var r = u(t, function () {
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            e(n);
          });
          r || n("Error when loading plugin " + t);
        });
      });
      return (e || (e = n("Promise"))).allSettled(r);
    }
    var d = (function () {
      function e(e, t, n) {
        ((this.$2 = {}),
          (this.$4 = e),
          (this.$3 = t),
          (this.$1 = n),
          (this.$2 = {}));
      }
      e.fromPluginTable = function (n, r) {
        return (
          o("KeyframesPluginLogger").KeyframesPluginLogger.logCompat(n),
          c(n)
            .then(function (t) {
              var o = t
                .filter(function (e) {
                  return e.status === "fulfilled";
                })
                .map(function (e) {
                  return e.value;
                })
                .filter(Boolean);
              return new e(n, o, r);
            })
            .catch(function () {
              return null;
            })
        );
      };
      var t = e.prototype;
      return (
        (t.maybeInstantiatePluginsForLayer = function (t, n) {
          if (t != null) {
            var e = t.pluginsLength();
            if (!(e == null || e === 0)) {
              var r = t.id(),
                a = r + "-" + n.getID();
              if (this.$2[a] !== !0) {
                for (var i = 0; i < e; i++) {
                  var l = t.plugins(i),
                    s = l.index(),
                    u = this.$3[s];
                  if (u != null) {
                    var c = new (o("flatbuffers").ByteBuffer)(l.contentArray()),
                      d = u[0],
                      m = u[1],
                      p = "getRootAsPlugin" + this.$4[s],
                      _ = m[p](c),
                      f = new d(_, t, this.$1);
                    f.animationDidLoadCompat(n);
                  }
                }
                this.$2[a] = !0;
              }
            }
          }
        }),
        e
      );
    })();
    l.default = d;
  },
  98,
);
