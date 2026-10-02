__d(
  "MAWWAComms",
  [
    "MAWClearSignalAndTempStores",
    "MAWCommsConfig",
    "MAWCreateGroupApi",
    "MAWCurrentUser",
    "MAWEphemeralConsts",
    "MAWExternalId",
    "MAWExtractMsFromExternalId",
    "MAWLoadRecentParticipantsApi",
    "MAWQueryGroup",
    "MWFBLogger",
    "Promise",
    "WAResolvable",
    "WAService",
    "isUseridAnnotationEnabled",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = new (o("WAResolvable").Resolvable)();
    function c(t, a, i, l) {
      return (
        (u = new (o("WAResolvable").Resolvable)()),
        o("WAService")
          .makeWAService({
            config: t,
            dependencies: {
              clearSignalAndTempStores: o("MAWClearSignalAndTempStores")
                .clearSignalAndTempStores,
              createGroups: o("MAWCreateGroupApi").createGroups,
              ephemeralMaxDeletionWindowForUnseenMessage: function () {
                return o("MAWEphemeralConsts")
                  .ephemeralMaxDelectionWindowForUnseenMessage;
              },
              extractMsFromStanzaId: o("MAWExtractMsFromExternalId")
                .extractMsFromStanzaId,
              generateExternalId: o("MAWExternalId").generateExternalId,
              isEmployee: o("MAWCurrentUser").isEmployee,
              isUseridAnnotationEnabled: r("isUseridAnnotationEnabled"),
              loadRecentParticipants: o("MAWLoadRecentParticipantsApi")
                .loadRecentParticipants,
              mediaUploadRoot: function () {
                return "/wa-msgr/mms";
              },
              queryGroup: o("MAWQueryGroup").queryGroup,
              recordDeviceChangeHistory: function () {
                return (s || (s = n("Promise"))).resolve();
              },
            },
            getCommsConfig: o("MAWCommsConfig").getCommsConfig,
            hmacKey: i,
            qpl: {
              franking: r("qpl")._(25299246, "150"),
              messageReceiveReliability: r("qpl")._(25306682, "11176"),
            },
            regData: a,
            serverRPC: l,
          })
          .then(
            function (e) {
              var t = e.oneQueue,
                n = e.protocolQueue,
                o = e.startComms,
                a = e.stopComms;
              return {
                oneQueue: t,
                protocolQueue: n,
                startComms: function () {
                  return (
                    r("promiseDone")(
                      o().then(
                        function () {
                          u.resolve();
                        },
                        function (e) {
                          u.reject(e);
                        },
                      ),
                    ),
                    u.promise
                  );
                },
                stopComms: a,
              };
            },
            function (t) {
              throw (
                o("MWFBLogger")
                  .MWLogger()
                  .tags(["backend"])
                  .catching(t)
                  .MUSTFIX(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to init WA service",
                      ])),
                  ),
                t
              );
            },
          )
      );
    }
    function d(e) {
      u.reject(e);
    }
    ((l.initWAService = c), (l.rejectCommsSetup = d));
  },
  98,
);
