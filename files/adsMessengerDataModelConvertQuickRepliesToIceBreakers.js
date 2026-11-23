__d(
  "adsMessengerDataModelConvertQuickRepliesToIceBreakers",
  ["adsMessengerBotPayloadForResponseType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? void 0
        : e.map(function (e) {
            return {
              title: e == null ? void 0 : e.title,
              response:
                (e == null ? void 0 : e.response_type) === "none"
                  ? ""
                  : e == null
                    ? void 0
                    : e.response,
              response_type:
                (e == null ? void 0 : e.response_type) === "none"
                  ? "text"
                  : e == null
                    ? void 0
                    : e.response_type,
              payload: r("adsMessengerBotPayloadForResponseType")(
                e == null ? void 0 : e.response_type,
                e == null ? void 0 : e.payload,
              ),
              content_type: e == null ? void 0 : e.content_type,
            };
          });
    }
    l.default = e;
  },
  98,
);
