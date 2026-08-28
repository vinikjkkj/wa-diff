__d(
  "createAndUsePBTA",
  [
    "AdsInterfacesLogger",
    "AdsManagerRelayEnvironment",
    "AdsUEditorAdgroupSetBackedThreadsAccountAction",
    "RelayModern",
    "createAndUsePBTAMutation.graphql",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("createAndUsePBTAMutation.graphql"));
    function u(e, t, n) {
      o("RelayModern").commitMutation(r("AdsManagerRelayEnvironment"), {
        mutation: s,
        variables: { page_id: e },
        onCompleted: function (a) {
          var o,
            l =
              a == null ||
              (o = a.xfb_create_page_backed_threads_accounts) == null
                ? void 0
                : o.th_user_id;
          r("isTruthy")(l)
            ? (r("AdsUEditorAdgroupSetBackedThreadsAccountAction").dispatch(
                {
                  hostID: t,
                  threadsUserID: l,
                  adgroupIDs: n,
                  instagramAccountV2ID: "",
                },
                { line: "49", module: "createAndUsePBTA.js", moduleID: i.id },
              ),
              r("AdsInterfacesLogger").log(
                {
                  eventName: "threads_ads_pbta_creation_success",
                  eventCategory: "user_action",
                  data: { page_id: e },
                },
                r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
              ))
            : r("AdsInterfacesLogger").log(
                {
                  eventName: "threads_ads_pbta_creation_error",
                  eventCategory: "errors",
                  data: {
                    page_id: e,
                    error_name: "failed request with null result",
                  },
                },
                r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
              );
        },
        onError: function (n) {
          r("AdsInterfacesLogger").log(
            {
              eventName: "threads_ads_pbta_creation_error",
              eventCategory: "errors",
              data: { page_id: e, error_name: n.message },
            },
            r("AdsInterfacesLogger").LOG_TYPE_PRIMARY_APP,
          );
        },
      });
    }
    l.createAndUsePBTA = u;
  },
  98,
);
