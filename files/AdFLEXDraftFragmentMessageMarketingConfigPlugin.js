__d(
  "AdFLEXDraftFragmentMessageMarketingConfigPlugin",
  ["cr:8526"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: "flexDraftFragmentConfig",
        key: "marketingMessages",
        tool: "MANAGE_MESSAGES",
        isFragmentAvailableInTool: function (t, r, o, a) {
          return n("cr:8526") != null ? n("cr:8526")()(t, r, o, a) : !0;
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
