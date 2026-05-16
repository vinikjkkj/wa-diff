__d(
  "WebBloksGetClientTimezone",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
      } catch (e) {
        return null;
      }
    }
    i.default = e;
  },
  66,
);
