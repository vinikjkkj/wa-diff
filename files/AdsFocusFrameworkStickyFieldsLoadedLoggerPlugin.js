__d(
  "AdsFocusFrameworkStickyFieldsLoadedLoggerPlugin",
  ["AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        log: function (t) {
          var e;
          if (t.source === "load") {
            var n = ((e = {}), (e.field_names = t.fields), e);
            r("AdsInterfacesLogger").log(
              { eventName: "focus_framework_sticky_fields_loaded", data: n },
              r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
            );
          }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
