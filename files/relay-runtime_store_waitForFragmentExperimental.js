__d(
  "relay-runtime/store/waitForFragmentExperimental",
  [
    "Promise",
    "asyncToGeneratorRuntime",
    "relay-runtime/store/observeFragmentExperimental",
  ],
  function (t, n, r, o, a, i) {
    var e,
      l = n("relay-runtime/store/observeFragmentExperimental").observeFragment;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, o) {
          var a;
          try {
            var i,
              s = yield new (e || (e = n("Promise")))(function (e, n) {
                a = l(t, r, o).subscribe({
                  next: function (r) {
                    r.state === "ok"
                      ? e(r.value)
                      : r.state === "error" && n(r.error);
                  },
                });
              });
            return ((i = a) == null || i.unsubscribe(), s);
          } catch (e) {
            var u;
            throw ((u = a) == null || u.unsubscribe(), e);
          }
        })),
        u.apply(this, arguments)
      );
    }
    a.exports = { waitForFragmentData: s };
  },
  null,
);
