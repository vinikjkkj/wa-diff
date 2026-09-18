__d(
  "WAWebGroupHistoryAddMemberSendFlow",
  [
    "fbt",
    "WALogger",
    "WATimeUtils",
    "WAWebABProps",
    "WAWebBotUtils",
    "WAWebDetailImage.react",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebGetGroupHistoryBundleMessagesCount",
    "WAWebGroupHistoryAddMemberEntryPoint",
    "WAWebGroupHistoryGating",
    "WAWebGroupHistoryPostJoinConfirmPopup.react",
    "WAWebGroupHistoryPostJoinEligibility",
    "WAWebGroupHistoryRestrictionHelper",
    "WAWebGroupHistoryShareToggleDefaultAction",
    "WAWebModalManager",
    "WAWebSendHistoryBundleAction",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "WAWebWidToJid",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = 64,
      _ = {
        titleHeader: { rowGap: "x8a3fw1", alignItems: "x1qjc9v5", $$css: !0 },
      };
    function f(e, t, n) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n, a) {
          var i = t.groupMetadata;
          if (i != null) {
            var l = o("WAWebWidFactory").asGroupWidOrThrow(i.id);
            if (h(i, l, n, a)) {
              var s = o("WATimeUtils").unixTime(),
                u;
              try {
                u = yield o(
                  "WAWebGetGroupHistoryBundleMessagesCount",
                ).getGroupHistoryBundleMessageCount({
                  groupWid: l,
                  targetStartMessageTime: s,
                });
              } catch (t) {
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[group-history] add-member availability probe failed",
                      ])),
                  )
                  .catching(r("getErrorSafe")(t))
                  .sendLogs("group-history-add-member-probe-failed");
                return;
              }
              u !== 0 && C(l, n, s);
            }
          }
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n, r) {
      return (
        o(
          "WAWebGroupHistoryPostJoinEligibility",
        ).isPostJoinHistoryGroupStructurallyEligible(
          o("WAWebGroupHistoryPostJoinEligibility").groupContextFromMetadata(e),
        ) &&
        !o("WAWebBotUtils").isMetaAiBot(n.id) &&
        !o("WAWebBotUtils").isWidTeeGroupMetaBotFbidWid(n.id) &&
        !e.participants.isParticipantWidOrAlternateWidValid(
          o("WAWebWidFactory").asUserWidOrThrow(n.id),
          function (e) {
            return o(
              "WAWebGroupHistoryPostJoinEligibility",
            ).isAlreadyReceivedState(
              e == null ? void 0 : e.groupHistorySentState,
            );
          },
        ) &&
        o("WAWebGroupHistoryGating").isGroupHistorySenderEnabled(t) &&
        y(r)
      );
    }
    function y(e) {
      return e ===
        o("WAWebGroupHistoryAddMemberEntryPoint")
          .AddMemberGroupHistoryEntryPoint.Mention
        ? o("WAWebABProps").getABPropConfigValue(
            "group_history_send_adding_from_mention",
          )
        : e ===
            o("WAWebGroupHistoryAddMemberEntryPoint")
              .AddMemberGroupHistoryEntryPoint.ContactCard
          ? o("WAWebABProps").getABPropConfigValue(
              "group_history_send_adding_from_contact_message",
            )
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  e,
              );
            })();
    }
    function C(e, t, a) {
      var i = o("WAWebFrontendContactGetters").getFormattedShortName(t);
      o("WAWebModalManager").ModalManager.openSupportModal(
        m.jsx(r("WAWebGroupHistoryPostJoinConfirmPopup.react"), {
          title: m.jsxs(o("WAWebFlex.react").FlexColumn, {
            xstyle: _.titleHeader,
            children: [
              m.jsx("div", {
                className: "x78zum5 xl56j7k",
                "data-testid": "group-history-add-member-modal-avatar",
                children: m.jsx(o("WAWebDetailImage.react").DetailImage, {
                  id: t.id,
                  size: p,
                }),
              }),
              s._(/*BTDS*/ "Send message history to {contactName}?", [
                s._param("contactName", i),
              ]),
            ],
          }),
          okText: s._(/*BTDS*/ "Send history"),
          cancelText: s._(/*BTDS*/ "Not now"),
          onCancel: o("WAWebModalManager").closeModalManager,
          onConfirm: n("asyncToGeneratorRuntime").asyncToGenerator(
            function* () {
              (o("WAWebModalManager").closeModalManager(), yield b(e, t, a));
            },
          ),
          children: s._(
            /*BTDS*/ "{contactName} will get recent messages from this group.",
            [s._param("contactName", i)],
          ),
        }),
      );
    }
    function b(e, t, n) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = o("WAWebGroupHistoryRestrictionHelper").filterParticipants([
              t.id,
            ]),
            i = a.historyReceivers,
            l = a.nonHistoryReceivers;
          if (i.length !== 0)
            try {
              (yield o("WAWebSendHistoryBundleAction").sendHistoryBundleAction(
                o("WAWebWidToJid").widToGroupJid(e),
                i,
                l,
                null,
                n,
              ),
                o("WAWebGroupHistoryShareToggleDefaultAction")
                  .setGroupHistoryShareToggleDefault(e, !0)
                  .catch(function (e) {
                    o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[group-history] failed to seed share-toggle default",
                          ])),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs(
                        "group-history-add-member-toggle-default-failed",
                      );
                  }),
                o("WAWebToastManager").ToastManager.open(
                  m.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Message history sent to {contactName}", [
                      s._param(
                        "contactName",
                        o("WAWebFrontendContactGetters").getFormattedShortName(
                          t,
                        ),
                      ),
                    ]),
                  }),
                ));
            } catch (e) {
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[group-history] failed to send add-member history bundle",
                    ])),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("group-history-add-member-send-failed");
            }
        })),
        v.apply(this, arguments)
      );
    }
    l.offerGroupHistoryAfterAddingMember = f;
  },
  226,
);
