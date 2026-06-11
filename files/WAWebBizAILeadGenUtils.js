__d(
  "WAWebBizAILeadGenUtils",
  ["WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      if (e != null)
        try {
          return o("WAWebWidFactory").createWid(e + "@c.us");
        } catch (e) {
          return null;
        }
      if (t != null)
        try {
          return o("WAWebWidFactory").createWid(t + "@lid");
        } catch (e) {
          return null;
        }
      return null;
    }
    l.getConsumerWid = e;
  },
  98,
);
