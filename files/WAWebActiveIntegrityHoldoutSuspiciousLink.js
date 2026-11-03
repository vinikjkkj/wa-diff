__d(
  "WAWebActiveIntegrityHoldoutSuspiciousLink",
  ["WAWebActiveIntegrityHoldout"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (
        o("WAWebActiveIntegrityHoldout").isSuppressedByActiveIntegrityHoldout()
      ) {
        t();
        return;
      }
      e();
    }
    l.showSuspiciousLinkWarningUnlessHeldOut = e;
  },
  98,
);
