__d(
  "WAWebOfflineSimulatorSuccess",
  ["WATimeUtils", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return o("WAWap").wap("success", {
        display_name: o("WAWap").CUSTOM_STRING(t != null ? t : "random_name"),
        abprops: o("WAWap").CUSTOM_STRING(e.toString()),
        props: o("WAWap").CUSTOM_STRING(e.toString()),
        creation: o("WAWap").CUSTOM_STRING(String(o("WATimeUtils").unixTime())),
        t: o("WAWap").CUSTOM_STRING(String(o("WATimeUtils").unixTime())),
      });
    }
    l.createSuccessStanza = e;
  },
  98,
);
