__d(
  "WAWebExtractMediaFieldsFromScheduledMsg",
  [
    "WAWebExtractImageFieldsFromScheduledMsg",
    "WAWebExtractVideoFieldsFromScheduledMsg",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t;
      return (t = o(
        "WAWebExtractImageFieldsFromScheduledMsg",
      ).extractImageFieldsFromScheduledMsg(e)) != null
        ? t
        : o(
            "WAWebExtractVideoFieldsFromScheduledMsg",
          ).extractVideoFieldsFromScheduledMsg(e);
    }
    l.extractMediaFieldsFromScheduledMsg = e;
  },
  98,
);
