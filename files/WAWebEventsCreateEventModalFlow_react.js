__d(
  "WAWebEventsCreateEventModalFlow.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WAWebActionToast.react",
    "WAWebChatCollection",
    "WAWebChatModel",
    "WAWebCmd",
    "WAWebEventUtils",
    "WAWebEventsCreateEventModal.react",
    "WAWebModalManager",
    "WAWebPreCallUserJourneyLogger",
    "WAWebSelectModal.react",
    "WAWebSelectModalFooter.react",
    "WAWebSendEventCreationMsgAction",
    "WAWebSendEventEditMsgAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUserPrefsMeUser",
    "WAWebVoipWaitingRoomToggleLoadable",
    "WAWebWamEnumSubSurface",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "useWAWebFlow",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useEffect,
      _ = m.useRef,
      f = m.useState,
      g = 1,
      h = n("$InternalEnum").Mirrored(["EventCreate", "ChooseChat"]);
    function y(t) {
      var a = t.callLinkRequired,
        i = a === void 0 ? !1 : a,
        l = t.existingEventMsg,
        c = t.isScheduledCall,
        m = c === void 0 ? !1 : c,
        y = t.nameInputPlaceholder,
        C = t.nameInputTitle,
        b = t.onSend,
        v = t.onWaitingRoomToggled,
        S = t.prefilledData,
        R = t.preselectedChat,
        L = t.ref,
        E = t.showLocationField,
        k = E === void 0 ? !0 : E,
        I = t.showRemoveEndTimeButton,
        T = I === void 0 ? !0 : I,
        D = t.title,
        x = o("useWAWebFlow").useFlow(h.EventCreate, {
          transitions: o("useWAWebFlow").FlowTransitions.None,
          onEnd: o("WAWebModalManager").closeModalManager,
        }),
        $ = x[0],
        P = x[1],
        N = _([]),
        M = f(S),
        w = M[0],
        A = M[1],
        F = _(null);
      (m &&
        F.current == null &&
        (F.current = new (o(
          "WAWebPreCallUserJourneyLogger",
        ).PreCallUserJourneyLogger)()),
        p(
          function () {
            var e = F.current;
            !S &&
              i &&
              e != null &&
              (e.clickCreateEvent(o("WAWebWamEnumSubSurface").SUB_SURFACE.NONE),
              e.clickCreateVideoCallLink(
                o("WAWebWamEnumSubSurface").SUB_SURFACE
                  .SCHEDULE_CALL_EVENT_CREATION_PAGE,
              ));
          },
          [i, S],
        ));
      var O = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          if ((A(t), !n)) {
            P.push(h.ChooseChat);
            return;
          }
          var r = t.eventCallType,
            a = t.eventDescription,
            i = t.eventEndTime,
            c = t.eventLocationName,
            p = t.eventName,
            _ = t.eventStartTime,
            f = Number(_),
            g = i != null ? Number(i) : void 0;
          if (S && l) {
            if (
              o("WAWebEventUtils").shouldShowEventAsPassed(f, g) &&
              r != null
            ) {
              o("WAWebToastManager").ToastManager.open(
                d.jsx(o("WAWebToast.react").Toast, {
                  msg: s._(
                    /*BTDS*/ "Call links can't be created for events in the past.",
                  ),
                  id: o("WAWebActionToast.react").genId(),
                }),
              );
              return;
            }
            var y = l.eventJoinLink,
              C = t.requireApproval,
              v = t.hasRequireApprovalChanged;
            if (v === !0 && C != null && y != null) {
              var R = null;
              try {
                R = new URL(y).pathname.split("/").filter(Boolean).pop();
              } catch (e) {
                R = null;
              }
              if (R != null && R !== "") {
                var L = y.includes("/video/");
                o("WAWebVoipWaitingRoomToggleLoadable")
                  .toggleWaitingRoomLoadable({
                    isVideoCall: L,
                    linkToken: R,
                    waitingRoomEnabled: C,
                  })
                  .then(function () {
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "WAWebEventsCreateEventModalFlow: waiting room toggle +",
                        ])),
                    );
                  })
                  .catch(function (e) {
                    (o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "WAWebEventsCreateEventModalFlow: toggle waiting room failed ",
                            "",
                          ])),
                        e,
                      )
                      .sendLogs("toggle-waiting-room-error"),
                      o("WAWebToastManager").ToastManager.open(
                        d.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(
                            /*BTDS*/ "Couldn't update approval setting. Try again.",
                          ),
                        }),
                      ));
                  });
              }
            }
            yield o("WAWebSendEventEditMsgAction").sendEventEditMessage(
              {
                name: p,
                startTime: f,
                endTime: g,
                isEventCanceled: !1,
                description: a,
                location: c,
                callType: r != null ? r : void 0,
              },
              l,
            );
          } else
            (m &&
              r != null &&
              F.current != null &&
              (r === "video"
                ? F.current.clickVideoCallLinkShare(
                    o("WAWebWamEnumSubSurface").SUB_SURFACE
                      .SCHEDULE_CALL_EVENT_CREATION_PAGE,
                  )
                : F.current.clickVoiceCallLinkShare(
                    o("WAWebWamEnumSubSurface").SUB_SURFACE
                      .SCHEDULE_CALL_EVENT_CREATION_PAGE,
                  )),
              yield o(
                "WAWebSendEventCreationMsgAction",
              ).sendEventCreationMessage({
                eventCreationOpts: {
                  name: p,
                  startTime: f,
                  endTime: g,
                  description: a,
                  location: c,
                  callType: r != null ? r : void 0,
                  isScheduledCall: m,
                  requireApproval: t.requireApproval,
                },
                chat: n,
                quotedMsg: n.composeQuotedMsg,
              }),
              n.set("composeQuotedMsg", null));
          (yield o("WAWebCmd").Cmd.openChatFromUnread({ chat: n }),
            b == null || b(),
            P.end());
        });
        return function (n, r) {
          return t.apply(this, arguments);
        };
      })();
      if (P.step == null) return null;
      var B = null;
      switch (P.step) {
        case h.EventCreate: {
          B = d.jsx(r("WAWebEventsCreateEventModal.react"), {
            title: D,
            existingEventMsg: l,
            prefilledData: S,
            nameInputTitle: C,
            nameInputPlaceholder: y,
            showLocationField: k,
            showRemoveEndTimeButton: T,
            callLinkRequired: i,
            onConfirm: function (t) {
              return O(t, R);
            },
            onCancel: function () {
              (i &&
                F.current != null &&
                F.current.dismiss(
                  o("WAWebWamEnumSubSurface").SUB_SURFACE
                    .SCHEDULE_CALL_EVENT_CREATION_PAGE,
                ),
                P.end());
            },
            onWaitingRoomToggled: v,
          });
          break;
        }
        case h.ChooseChat: {
          var W,
            q = function () {
              return N.current;
            },
            U = function (t, n, r) {
              N.current = r.filter(function (e) {
                return e instanceof o("WAWebChatModel").Chat;
              });
            },
            V = function (t) {
              var e = t.selectedItems,
                n = e;
              if (!w)
                throw r("err")(
                  "Event create modal flow: Expected event data to be set before chat is selected",
                );
              if (n.length !== 1)
                throw r("err")(
                  "Event create modal flow: Expected exactly one chat to be selected",
                );
              return O(w, n[0]);
            };
          B = d.jsx(o("WAWebSelectModal.react").SelectModal, {
            title: s._(/*BTDS*/ "Send to"),
            listType: o("WAWebSelectModal.react").ListType.ChatSelectModal,
            getInitialItems: q,
            maxItems: g,
            onConfirm: V,
            onCancel: function () {
              return P.pop();
            },
            onSelectionChanged: U,
            singleSelectionFooterType: o("WAWebSelectModalFooter.react")
              .FooterType.NEXT,
            multipleSelectionFooterType: o("WAWebSelectModalFooter.react")
              .FooterType.NEXT,
            excludeChat:
              (W = o("WAWebChatCollection").ChatCollection.get(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              )) != null
                ? W
                : void 0,
            tsNavigationData: { surface: "unknown", viewName: "send-event" },
          });
          break;
        }
      }
      return d.jsx($, { ref: L, flow: P, children: B });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
