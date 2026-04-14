__d(
  "WAWebVoipUiDebugDrawer.react",
  [
    "fbt",
    "WATimeUtils",
    "WAWebButton.react",
    "WAWebCallCollection",
    "WAWebCallLogMsgData.flow",
    "WAWebCallModel",
    "WAWebChatCollection",
    "WAWebContactCollection",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebFlex.react",
    "WAWebMenuItems.react",
    "WAWebMsgCollection",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebSelect.react",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebVoipEventConstants",
    "WAWebVoipUiManager",
    "WAWebVoipWaCallEnums",
    "asyncToGeneratorRuntime",
    "nullthrows",
    "react",
    "useWAWebEventTargetValue",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useState,
      _ = [
        o("WAWebVoipWaCallEnums").CallState.Calling,
        o("WAWebVoipWaCallEnums").CallState.PreacceptReceived,
        o("WAWebVoipWaCallEnums").CallState.CallActive,
        o("WAWebVoipWaCallEnums").CallState.AcceptSent,
        o("WAWebVoipWaCallEnums").CallState.CallStateEnding,
      ],
      f = 3,
      g = 16;
    function h(e) {
      var t,
        a,
        i = e.isGroupCall,
        l = i === void 0 ? !1 : i,
        u = e.isVideoCall,
        d = e.title,
        h = r("useWAWebEventTargetValue")(
          r("WAWebCallCollection"),
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallCollectionEvents.ACTIVE_CALL,
          ),
          function () {
            return r("WAWebCallCollection").activeCall != null;
          },
        ),
        y = p(null),
        v = y[0],
        S = y[1],
        R = p(null),
        L = R[0],
        E = R[1],
        k = p(f),
        I = k[0],
        T = k[1],
        D = r("useWAWebStableCallback")(function () {
          (L != null && o("WAWebMsgCollection").MsgCollection.remove(L.id),
            r("WAWebCallCollection").setActiveCall(null),
            E(null),
            S(null));
        });
      (m(
        function () {
          return function () {
            D();
          };
        },
        [D],
      ),
        m(
          function () {
            var e = l
              ? o("WAWebVoipWaCallEnums").CallState.CallActive
              : o("WAWebVoipWaCallEnums").CallState.Calling;
            if (v !== e) return;
            var t = null;
            function a() {
              return i.apply(this, arguments);
            }
            function i() {
              return (
                (i = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = C(l ? I : 1);
                    if (e.length !== 0) {
                      var n = r("nullthrows")(e[0]),
                        a = new (o("WAWebMsgModel").Msg)({
                          id: new (r("WAWebMsgKey"))({
                            remote: n.id,
                            fromMe: !0,
                            id: yield r("WAWebMsgKey").newId(),
                          }),
                          from: o(
                            "WAWebUserPrefsMeUser",
                          ).getMePnUserOrThrow_DO_NOT_USE(),
                          type: o("WAWebMsgType").MSG_TYPE.CALL_LOG,
                          kind: o("WAWebMsgType").MsgKind.CallLog,
                          viewMode:
                            o("WAWebViewMode.flow").ViewModeType.VISIBLE,
                          callCreator: o(
                            "WAWebUserPrefsMeUser",
                          ).getMePnUserOrThrow_DO_NOT_USE(),
                          t: o("WATimeUtils").unixTime(),
                          callOutcome: o("WAWebCallLogMsgData.flow").CallOutcome
                            .Ongoing,
                          isVideoCall: u,
                        });
                      ((t = a.id),
                        o("WAWebMsgCollection").MsgCollection.add([a]),
                        E(a));
                      var i = new (r("WAWebCallModel"))();
                      if (
                        ((i.id = a.id.id),
                        (i.peerJid = n.contact.id),
                        (i.isVideo = u),
                        (i.isGroup = l),
                        (i.groupJid = null),
                        (i.msg = a),
                        l)
                      ) {
                        var s = e.map(function (e) {
                          return e.contact.id;
                        });
                        i.groupCallParticipantsConnected = s;
                      }
                      (o(
                        "WAWebVoipUiManager",
                      ).setupVoipActiveCallChangeListener(),
                        r("WAWebCallCollection").setActiveCall(i),
                        i.setState(
                          l
                            ? o("WAWebVoipWaCallEnums").CallState.CallActive
                            : r("nullthrows")(v),
                        ));
                    }
                  },
                )),
                i.apply(this, arguments)
              );
            }
            return (
              a(),
              function () {
                t != null &&
                  v == null &&
                  (o("WAWebMsgCollection").MsgCollection.remove(t),
                  r("WAWebCallCollection").setActiveCall(null));
              }
            );
          },
          [v, u, l, I],
        ),
        o("useWAWebListener").useListener(
          r("WAWebCallCollection").activeCall,
          o("WAWebVoipEventConstants").getChangeEvent(
            o("WAWebVoipEventConstants").VoipCallModelEvents.STATE,
          ),
          function () {
            if (v != null && r("WAWebCallCollection").activeCall) {
              var e;
              S(
                (e = r("WAWebCallCollection").activeCall) == null
                  ? void 0
                  : e.getState(),
              );
            }
          },
        ));
      var x = r("useWAWebStableCallback")(function () {
          var e,
            t = r("WAWebCallCollection").activeCall;
          if (!(t == null || !l)) {
            var n = (e = t.groupCallParticipantsConnected) != null ? e : [];
            if (!(n.length >= g)) {
              var a = b(n);
              if (a != null) {
                var i = [].concat(n, [a]);
                ((t.groupCallParticipantsConnected = i),
                  t.trigger(
                    o("WAWebVoipEventConstants").getChangeEvent(
                      o("WAWebVoipEventConstants").VoipCallModelEvents
                        .GROUP_CALL_PARTICIPANTS_CONNECTED,
                    ),
                  ),
                  T(i.length));
              }
            }
          }
        }),
        $ = r("useWAWebStableCallback")(function () {
          var e,
            t = r("WAWebCallCollection").activeCall;
          if (!(t == null || !l)) {
            var n = (e = t.groupCallParticipantsConnected) != null ? e : [];
            if (!(n.length <= 1)) {
              var a = n.slice(0, -1);
              ((t.groupCallParticipantsConnected = a),
                t.trigger(
                  o("WAWebVoipEventConstants").getChangeEvent(
                    o("WAWebVoipEventConstants").VoipCallModelEvents
                      .GROUP_CALL_PARTICIPANTS_CONNECTED,
                  ),
                ),
                T(a.length));
            }
          }
        });
      if (v == null) {
        if (l) {
          var P;
          return c.jsx("div", {
            className:
              "xso031l x1q0q8m5 x120ee7l x16ovd2e x12xbjc7 xb0esv5 x1nzty39",
            children: c.jsxs((P = o("WAWebFlex.react")).FlexColumn, {
              gap: 12,
              children: [
                c.jsx(P.FlexItem, {
                  children: c.jsx("span", {
                    className: "x117nqv4",
                    children: d,
                  }),
                }),
                c.jsx(P.FlexItem, { children: s._(/*BTDS*/ "Participants:") }),
                c.jsxs(P.FlexRow, {
                  gap: 12,
                  align: "center",
                  children: [
                    c.jsx(o("WAWebSelect.react").Select, {
                      width: 100,
                      menuMaxHeight: 200,
                      initialSelection: String(I),
                      onChange: function (t) {
                        return T(parseInt(t, 10));
                      },
                      children: Array.from({ length: g }, function (e, t) {
                        return t + 1;
                      }).map(function (e) {
                        return c.jsx(
                          o("WAWebMenuItems.react").SelectMenuItem,
                          { optionId: String(e), primary: String(e) },
                          e,
                        );
                      }),
                    }),
                    c.jsx(o("WAWebButton.react").Button, {
                      onClick: function () {
                        return S(
                          o("WAWebVoipWaCallEnums").CallState.CallActive,
                        );
                      },
                      disabled: h,
                      children: s._(/*BTDS*/ "Start fake group call"),
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        return c.jsx("div", {
          className:
            "xso031l x1q0q8m5 x120ee7l x16ovd2e x12xbjc7 xb0esv5 x1nzty39",
          children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
            gap: 12,
            children: [
              c.jsx(o("WAWebFlex.react").FlexItem, {
                children: c.jsx("span", { className: "x117nqv4", children: d }),
              }),
              c.jsx(o("WAWebFlex.react").FlexItem, {
                children: c.jsx(o("WAWebButton.react").Button, {
                  onClick: function () {
                    return S(o("WAWebVoipWaCallEnums").CallState.Calling);
                  },
                  disabled: h,
                  children: s._(/*BTDS*/ "Start fake call"),
                }),
              }),
            ],
          }),
        });
      }
      var N =
        (t =
          (a = r("WAWebCallCollection").activeCall) == null ||
          (a = a.groupCallParticipantsConnected) == null
            ? void 0
            : a.length) != null
          ? t
          : I;
      return c.jsx("div", {
        className:
          "xso031l x1q0q8m5 x120ee7l x16ovd2e x12xbjc7 xb0esv5 x1nzty39",
        children: c.jsxs(o("WAWebFlex.react").FlexColumn, {
          gap: 12,
          children: [
            c.jsx(o("WAWebFlex.react").FlexItem, {
              children: c.jsx("span", { className: "x117nqv4", children: d }),
            }),
            c.jsx(o("WAWebFlex.react").FlexItem, {
              children: s._(/*BTDS*/ "Call state:"),
            }),
            c.jsx(o("WAWebSelect.react").Select, {
              width: 200,
              initialSelection: String(v),
              onChange: function (t) {
                var e;
                return (e = r("WAWebCallCollection").activeCall) == null
                  ? void 0
                  : e.setState(
                      r("nullthrows")(
                        o("WAWebVoipWaCallEnums").CallState.cast(
                          parseInt(t, 10),
                        ),
                      ),
                    );
              },
              children: _.map(function (e) {
                return c.jsx(
                  o("WAWebMenuItems.react").SelectMenuItem,
                  {
                    optionId: String(e),
                    primary: o("WAWebVoipWaCallEnums").CallState.getName(e),
                  },
                  o("WAWebVoipWaCallEnums").CallState.getName(e),
                );
              }),
            }),
            l &&
              c.jsxs(c.Fragment, {
                children: [
                  c.jsx(o("WAWebFlex.react").FlexItem, {
                    children: s._(/*BTDS*/ "Participants: {count}", [
                      s._param("count", N),
                    ]),
                  }),
                  c.jsxs(o("WAWebFlex.react").FlexRow, {
                    gap: 8,
                    children: [
                      c.jsx(o("WAWebButton.react").Button, {
                        onClick: x,
                        disabled: N >= g,
                        children: s._(/*BTDS*/ "+ Add"),
                      }),
                      c.jsx(o("WAWebButton.react").Button, {
                        onClick: $,
                        disabled: N <= 1,
                        children: s._(/*BTDS*/ "- Remove"),
                      }),
                    ],
                  }),
                ],
              }),
            c.jsx(o("WAWebButton.react").Button, {
              onClick: D,
              type: "negative-destructive",
              children: s._(/*BTDS*/ "End call"),
            }),
          ],
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.onBack;
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        theme: "settings",
        testid: void 0,
        children: [
          c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            title: s._(/*BTDS*/ "VoIP UI Debug"),
            onBack: i,
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
          }),
          c.jsxs(r("WAWebDrawerBody.react"), {
            children: [
              c.jsx(h, { title: "1:1 Audio Call", isVideoCall: !1 }),
              c.jsx(h, { title: "1:1 Video Call", isVideoCall: !0 }),
              c.jsx(h, {
                title: "Group Audio Call",
                isVideoCall: !1,
                isGroupCall: !0,
              }),
              c.jsx(h, {
                title: "Group Video Call",
                isVideoCall: !0,
                isGroupCall: !0,
              }),
            ],
          }),
        ],
      });
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      for (
        var t = o("WAWebContactCollection").ContactCollection.getModelsArray(),
          n = [],
          a = new Set();
        n.length < e && a.size < t.length;
      ) {
        var i = Math.floor(Math.random() * (t.length - 1));
        if (!a.has(i)) {
          a.add(i);
          var l = r("nullthrows")(t.at(i)),
            s = o("WAWebChatCollection").ChatCollection.get(l.id);
          s && s.id.isUser() && n.push(s);
        }
      }
      return n;
    }
    function b(e) {
      var t,
        n = new Set(
          e.map(function (e) {
            return e != null && typeof e == "object" && "toString" in e
              ? e.toString()
              : String(e);
          }),
        ),
        r = o("WAWebContactCollection")
          .ContactCollection.getModelsArray()
          .filter(function (e) {
            var t = o("WAWebChatCollection").ChatCollection.get(e.id);
            return (
              (t == null ? void 0 : t.id.isUser()) && !n.has(e.id.toString())
            );
          });
      if (r.length === 0) return null;
      var a = Math.floor(Math.random() * r.length),
        i = r[a];
      return (t = i == null ? void 0 : i.id) != null ? t : null;
    }
    l.default = y;
  },
  226,
);
