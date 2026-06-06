__d(
  "WAWebAbpropDebugChangelog",
  [
    "WAWebABPropsCache",
    "WAWebUserPrefsIndexedDBStorage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2e4;
    function s() {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(
        "WAABPropDebugLog",
      );
    }
    function u(e) {
      return o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(
        "WAABPropDebugLog",
        e,
      );
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r = [];
          if (
            (r.push(new Date().toLocaleString() + " start sync\n"),
            t.length === 0)
          )
            r.push("initial ABProp sync");
          else {
            var o = m(t, n),
              a = p(o);
            r.push.apply(r, a);
          }
          r.push("\n\n");
          var i = r.join("\n"),
            l = s(),
            c = l != null ? l + "\n" + i : i;
          yield u(c.slice(-e));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t) {
      var n = [],
        r = new Map(
          e.map(function (e) {
            return [parseInt(e.configCode, 10), e.configValue];
          }),
        ),
        a = new Map([]);
      t.forEach(function (e, t) {
        a.set(t, e.configValue);
      });
      for (var i of a) {
        var l = i[0],
          s = i[1],
          u = r.has(l);
        if (!u)
          n.push({
            type: "added",
            name: o("WAWebABPropsCache").getABPropConfigNameFromCode(l),
            value: s,
          });
        else {
          var c = r.get(l);
          c !== s &&
            n.push({
              type: "changed",
              name: o("WAWebABPropsCache").getABPropConfigNameFromCode(l),
              oldValue: c,
              newValue: s,
            });
        }
      }
      for (var d of r) {
        var m = d[0],
          p = d[1],
          _ = a.has(m);
        _ ||
          n.push({
            type: "removed",
            name: o("WAWebABPropsCache").getABPropConfigNameFromCode(m),
            value: p,
          });
      }
      return n;
    }
    function p(e) {
      var t = [];
      return (
        e
          .filter(function (e) {
            return e.type === "added";
          })
          .forEach(function (e) {
            var n;
            t.push(
              "added: " +
                e.name +
                "=" +
                ((n = e.value) != null ? n : "[default]"),
            );
          }),
        e
          .filter(function (e) {
            return e.type === "removed";
          })
          .forEach(function (e) {
            var n;
            t.push(
              "removed: " +
                e.name +
                "=" +
                ((n = e.value) != null ? n : "[default]"),
            );
          }),
        e
          .filter(function (e) {
            return e.type === "changed";
          })
          .forEach(function (e) {
            var n, r, o, a;
            t.push(
              "changed: " +
                e.name +
                " from " +
                ((n = (r = e.oldValue) == null ? void 0 : r.toString()) != null
                  ? n
                  : "default") +
                " to " +
                ((o = (a = e.newValue) == null ? void 0 : a.toString()) != null
                  ? o
                  : "default"),
            );
          }),
        e.length === 0 && t.push("no changes"),
        t
      );
    }
    var _ = {
      processAbpropChangelog: c,
      getABPropDebugLog: s,
      setABPropDebugLog: u,
    };
    l.default = _;
  },
  98,
);
