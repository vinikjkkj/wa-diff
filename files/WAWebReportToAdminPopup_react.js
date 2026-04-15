__d(
  "WAWebReportToAdminPopup.react",
  [
    "fbt",
    "WAWebActionToast.react",
    "WAWebConfirmPopup.react",
    "WAWebFrontendMsgGetters",
    "WAWebModalManager",
    "WAWebReportToAdminEventsLogger",
    "WAWebReportToAdminJob",
    "WAWebText.react",
    "WAWebToastManager",
    "WAWebWamEnumReportToAdminInteraction",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.msg,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Send for admin review?")), (t[0] = r))
        : (r = t[0]);
      var a = r,
        i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(
            /*BTDS*/ "This message will be sent to group admins for review. Other group members will not be notified.",
          )),
          (t[1] = i))
        : (i = t[1]);
      var l = i,
        c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = s._(/*BTDS*/ "Ok")), (t[2] = c))
        : (c = t[2]);
      var m = c,
        p;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = s._(/*BTDS*/ "Sending for admin review")), (t[3] = p))
        : (p = t[3]);
      var _ = p,
        f;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Sent for admin review")), (t[4] = f))
        : (f = t[4]);
      var g = f,
        h;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(/*BTDS*/ "Failed to send for admin review.")), (t[5] = h))
        : (h = t[5]);
      var y = h,
        C;
      t[6] !== n
        ? ((C = o("WAWebFrontendMsgGetters").getChat(n)),
          (t[6] = n),
          (t[7] = C))
        : (C = t[7]);
      var b = C.id,
        v;
      t[8] !== b || t[9] !== n
        ? ((v = function () {
            o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
              reportToAdminInteraction: o(
                "WAWebWamEnumReportToAdminInteraction",
              ).REPORT_TO_ADMIN_INTERACTION.CLICK_CONFIRM_SEND_FOR_ADMIN_REVIEW,
              groupId: b.user,
            });
            var e = new (o("WAWebActionToast.react").ActionType)(_),
              t = o("WAWebReportToAdminJob")
                .sendForAdminReview(n, b)
                .then(function () {
                  return new (o("WAWebActionToast.react").ActionType)(g);
                })
                .catch(function () {
                  return new (o("WAWebActionToast.react").ActionType)(y);
                })
                .finally(d);
            o("WAWebToastManager").ToastManager.open(
              u.jsx(o("WAWebActionToast.react").ActionToast, {
                initialAction: e,
                pendingAction: t,
              }),
            );
          }),
          (t[8] = b),
          (t[9] = n),
          (t[10] = v))
        : (v = t[10]);
      var S = v,
        R;
      t[11] !== b.user
        ? ((R = function () {
            (o("WAWebReportToAdminEventsLogger").logRTAReportingEvent({
              reportToAdminInteraction: o(
                "WAWebWamEnumReportToAdminInteraction",
              ).REPORT_TO_ADMIN_INTERACTION.CLICK_CANCEL_SEND_FOR_ADMIN_REVIEW,
              groupId: b.user,
            }),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[11] = b.user),
          (t[12] = R))
        : (R = t[12]);
      var L = R,
        E;
      t[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = { surface: "unknown", viewName: "report-to-admin" }),
          (t[13] = E))
        : (E = t[13]);
      var k;
      t[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = u.jsx(o("WAWebText.react").WAWebTextMuted, { children: l })),
          (t[14] = k))
        : (k = t[14]);
      var I;
      return (
        t[15] !== L || t[16] !== S
          ? ((I = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: E,
              onOK: S,
              okText: m,
              okButtonType: "solid-warning",
              onCancel: L,
              title: a,
              children: k,
            })),
            (t[15] = L),
            (t[16] = S),
            (t[17] = I))
          : (I = t[17]),
        I
      );
    }
    function d() {
      o("WAWebModalManager").ModalManager.close();
    }
    l.default = c;
  },
  226,
);
