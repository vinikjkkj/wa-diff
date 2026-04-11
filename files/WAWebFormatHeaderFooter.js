__d(
  "WAWebFormatHeaderFooter",
  ["WAWebFormatConfiguration"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return {
        formatters: o("WAWebFormatConfiguration").HeaderAndFooter({
          links: e,
          selectable: !0,
          trusted: t,
        }),
        selectable: !0,
      };
    }
    l.enableHeaderAndFooterFormatting = e;
  },
  98,
);
