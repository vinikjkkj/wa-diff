__d(
  "LSServerProgramColumnMasking",
  ["FBLogger", "I64", "LSServerProgramHardening", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [(e || (e = o("I64"))).of_int32(15), e.of_int32(16)];
    function u(t) {
      var n = t.threadType;
      return (
        (e || (e = o("I64"))).isI64(n) &&
        s.some(function (t) {
          return (e || (e = o("I64"))).equal(n, t);
        })
      );
    }
    var c = {
        edit_message_history: {
          columns: ["messageContent"],
          isProtectedRow: function () {
            return !0;
          },
        },
        threads: { columns: ["snippet"], isProtectedRow: u },
      },
      d = new Set();
    function m(e, t, n, o, a) {
      var i = [e, n, t, o, String(a)].join("|");
      if (!d.has(i)) {
        d.add(i);
        var l = r("FBLogger")("wmi", "ls_server_program_masked_column");
        e === "read"
          ? l.mustfix(
              "Server program read %s.%s of an E2EE row (sprocs: %s, masked: %s)",
              n,
              t,
              o,
              String(a),
            )
          : l.mustfix(
              "Server program update moved a row out of the E2EE class with %s.%s (sprocs: %s, dropped: %s)",
              n,
              t,
              o,
              String(a),
            );
      }
    }
    function p(e, t) {
      var n = c[e];
      if (
        n == null ||
        !o("LSServerProgramHardening").isServerProgramHardeningEnabled()
      )
        return null;
      var a = n.columns,
        i = n.isProtectedRow,
        l = r("justknobx")._("8594"),
        s = t === "" ? "<top level>" : t;
      return {
        maskRow: function (n) {
          if (!i(n)) return n;
          var t = babelHelpers.extends({}, n),
            r = function (o) {
              if (n[o] === void 0) return 1;
              Object.defineProperty(t, o, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return (m("read", o, e, s, l), l ? void 0 : n[o]);
                },
              });
            };
          for (var o of a) r(o);
          return t;
        },
        restrictUpdate: function (n, r, o) {
          if (!i(n) || i(o)) return o;
          var t = o;
          for (var u of a)
            if (!(n[u] === void 0 || u in r) && (m("carried", u, e, s, l), l)) {
              var c;
              t = babelHelpers.extends({}, t, ((c = {}), (c[u] = void 0), c));
            }
          return t;
        },
      };
    }
    l.getServerProgramColumnMasking = p;
  },
  98,
);
