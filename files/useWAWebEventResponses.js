__d(
  "useWAWebEventResponses",
  [
    "WAWebAddonHydrationUtils",
    "WAWebEventResponseCollection",
    "WAWebEventResponseModel",
    "WAWebEventResponseMsgDataConversion",
    "WAWebMarkAddonsAsReadUsingAddonInfra",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
    "react",
    "useWAWebAggregatedView",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useRef;
    function d(e) {
      return new (o("WAWebEventResponseModel").EventResponse)({
        id: e.id,
        ack: e.ack,
        parentMsgKey: e.id,
        eventResponse: o("WAWebProtobufsE2E.pb")
          .Message$EventResponseMessage$EventResponseType.GOING,
        senderTimestampMs: e.t * 1e3,
        sender: o("WAWebMsgGetters").getSender(e),
        t: e.t,
        read: !0,
      });
    }
    function m(e) {
      var t = o("useWAWebMsgValues").useMsgValues(e.id, [
          o("WAWebMsgGetters").getId,
        ]),
        n = t[0],
        r = o("useWAWebAggregatedView").useAggregatedView(
          o("WAWebEventResponseCollection").EventResponseCollection.byParent,
          n,
        ),
        a = c(d(e)),
        i = o("WAWebMarkAddonsAsReadUsingAddonInfra").useMarkAddonsAsRead();
      return (
        u(
          function () {
            var e = r.filter(function (e) {
              return !e.read;
            });
            e.length !== 0 &&
              i(
                e.map(
                  o("WAWebEventResponseMsgDataConversion")
                    .eventResponseToEventResponseMsgData,
                ),
              );
          },
          [r, i],
        ),
        u(
          function () {
            o("WAWebAddonHydrationUtils").hydrateAddons({
              ids: [n],
              hydrationType: o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE,
            });
          },
          [n],
        ),
        u(
          function () {
            var t;
            (e.id !== a.current.id ||
              !(
                (t = o("WAWebMsgGetters").getSender(e)) != null &&
                t.equals(a.current.sender)
              )) &&
              (a.current = d(e));
          },
          [e],
        ),
        [].concat(r.toArray(), [a.current])
      );
    }
    l.useEventResponses = m;
  },
  98,
);
