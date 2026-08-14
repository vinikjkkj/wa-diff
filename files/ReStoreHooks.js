__d(
  "ReStoreHooks",
  ["PromiseOrValue"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      return {
        afterAdd: t.reduce(
          function (t, n) {
            var r = n.onAfterAdd;
            return r
              ? function (n) {
                  return (e || (e = o("PromiseOrValue"))).map(
                    t(n),
                    function (e) {
                      return r(babelHelpers.extends({}, n, { value: e }));
                    },
                  );
                }
              : t;
          },
          function (e) {
            var t = e.value;
            return t;
          },
        ),
        afterEntriesNext: t.reduce(
          function (e, t) {
            var n = t.onAfterEntriesNext;
            return n
              ? function (t) {
                  return n({ tableName: t.tableName, value: e(t) });
                }
              : e;
          },
          function (e) {
            var t = e.value;
            return t;
          },
        ),
        afterGet: t.reduce(
          function (e, t) {
            var n = t.onAfterGet;
            return n
              ? function (t) {
                  return n({ tableName: t.tableName, value: e(t) });
                }
              : e;
          },
          function (e) {
            var t = e.value;
            return t;
          },
        ),
        afterPut: t.reduce(
          function (t, n) {
            var r = n.onAfterPut;
            return r
              ? function (n) {
                  return (e || (e = o("PromiseOrValue"))).map(
                    t(n),
                    function (e) {
                      return r(babelHelpers.extends({}, n, { value: e }));
                    },
                  );
                }
              : t;
          },
          function (e) {
            var t = e.value;
            return t;
          },
        ),
        beforeAdd: t.reduce(
          function (t, n) {
            var r = n.onBeforeAdd;
            return r
              ? function (n) {
                  return (e || (e = o("PromiseOrValue"))).map(
                    t(n),
                    function (e) {
                      return r(babelHelpers.extends({}, n, { value: e }));
                    },
                  );
                }
              : t;
          },
          function (e) {
            var t = e.value;
            return t;
          },
        ),
        beforeDelete: t.reduce(
          function (t, n) {
            var r = n.onBeforeDelete;
            return r
              ? function (n) {
                  return (e || (e = o("PromiseOrValue"))).map(
                    t(n),
                    function (e) {
                      return r(babelHelpers.extends({}, n, { value: e }));
                    },
                  );
                }
              : t;
          },
          function (e) {
            var t = e.key;
            return t;
          },
        ),
        beforeNotify: t.reduce(
          function (e, t) {
            var n = t.onBeforeNotify;
            return n
              ? function (t) {
                  var r = e(t),
                    o = r.newValue,
                    a = r.prevValue;
                  return n({
                    newValue: o,
                    prevValue: a,
                    tableName: t.tableName,
                  });
                }
              : e;
          },
          function (e) {
            var t = e.newValue,
              n = e.prevValue;
            return { newValue: t, prevValue: n };
          },
        ),
        beforePut: t.reduce(
          function (t, n) {
            var r = n.onBeforePut;
            return r
              ? function (n) {
                  return (e || (e = o("PromiseOrValue"))).map(
                    t(n),
                    function (e) {
                      return r(babelHelpers.extends({}, n, { value: e }));
                    },
                  );
                }
              : t;
          },
          function (e) {
            var t = e.value;
            return t;
          },
        ),
        beforeUpsert: t.reduce(
          function (t, n) {
            var r = n.onBeforeUpsert;
            return r
              ? function (n) {
                  return (e || (e = o("PromiseOrValue"))).map(
                    t(n),
                    function (e) {
                      return r(babelHelpers.extends({}, n, { value: e }));
                    },
                  );
                }
              : t;
          },
          function (e) {
            var t = e.value;
            return t;
          },
        ),
      };
    }
    l.createHookManager = s;
  },
  98,
);
