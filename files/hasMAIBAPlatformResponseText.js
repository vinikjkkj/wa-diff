__d(
  "hasMAIBAPlatformResponseText",
  [
    "RelayHooks",
    "getMAIBANotificationSnippetFromResponse",
    "hasMAIBAPlatformResponseText_response.graphql",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s =
        e !== void 0
          ? e
          : (e = n("hasMAIBAPlatformResponseText_response.graphql"));
    function u(e) {
      return e.some(function (e) {
        var t, n;
        return (
          ((t =
            (n = r("getMAIBANotificationSnippetFromResponse")(
              e.response_json,
              e.texts_with_entities.map(function (e) {
                return e.text;
              }),
            )) == null
              ? void 0
              : n.trim().length) != null
            ? t
            : 0) > 0
        );
      });
    }
    function c(e) {
      return o("RelayHooks").readInlineData(s, e).response_json;
    }
    function d(e) {
      return u(
        e.map(function (e) {
          return o("RelayHooks").readInlineData(s, e);
        }),
      );
    }
    ((l.hasMAIBAPlatformResponseTextInSources = u),
      (l.getMAIBAPlatformResponseJson = c),
      (l.hasMAIBAPlatformResponseText = d));
  },
  98,
);
