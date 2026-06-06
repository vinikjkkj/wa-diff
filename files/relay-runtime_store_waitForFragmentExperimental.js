__d(
  "relay-runtime/store/waitForFragmentExperimental",
  ["relay-runtime/store/observeFragmentExperimental"],
  function (t, n, r, o, a, i) {
    var e = n(
      "relay-runtime/store/observeFragmentExperimental",
    ).observeFragment;
    async function l(t, n, r) {
      var o;
      try {
        var a,
          i = await new Promise(function (a, i) {
            o = e(t, n, r).subscribe({
              next: function (t) {
                t.state === "ok"
                  ? a(t.value)
                  : t.state === "error" && i(t.error);
              },
            });
          });
        return ((a = o) == null || a.unsubscribe(), i);
      } catch (e) {
        var l;
        throw ((l = o) == null || l.unsubscribe(), e);
      }
    }
    a.exports = { waitForFragmentData: l };
  },
  null,
);
