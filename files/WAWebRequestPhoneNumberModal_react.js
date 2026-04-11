__d(
  "WAWebRequestPhoneNumberModal.react",
  [
    "fbt",
    "WAWebChatCollection",
    "WAWebConfirmPopup.react",
    "WAWebLogRequestPhoneNumber",
    "WAWebModalManager",
    "WAWebSendRequestPhoneNumberChatAction",
    "WAWebStateUtils",
    "WAWebWamEnumPnhActionType",
    "WAWebWamEnumPnhChatTypeType",
    "WAWebWamEnumPnhMessageChatParty",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e.useEffect;
    function d(e) {
      var t = o("react-compiler-runtime").c(13),
        n = e.entryPoint,
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = o("WAWebChatCollection").ChatCollection.getActive()),
          (t[0] = r))
        : (r = t[0]);
      var a = r,
        i,
        l;
      (t[1] !== n
        ? ((i = function () {
            n &&
              o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
                o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY.BIZ,
                o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE
                  .REQUEST_DIALOG_APPEAR,
                n,
              );
          }),
          (l = [n]),
          (t[1] = n),
          (t[2] = i),
          (t[3] = l))
        : ((i = t[2]), (l = t[3])),
        c(i, l));
      var d;
      t[4] !== n
        ? ((d = function () {
            (a &&
              (o(
                "WAWebSendRequestPhoneNumberChatAction",
              ).sendRequestPhoneNumber(o("WAWebStateUtils").unproxy(a)),
              n != null &&
                o("WAWebLogRequestPhoneNumber").logPnhRequestRevealActionHelper(
                  o("WAWebWamEnumPnhChatTypeType").PNH_CHAT_TYPE_TYPE.CTWA,
                  o("WAWebWamEnumPnhMessageChatParty").PNH_MESSAGE_CHAT_PARTY
                    .BIZ,
                  o("WAWebWamEnumPnhActionType").PNH_ACTION_TYPE.SEND_REQUEST,
                  n,
                )),
              o("WAWebModalManager").ModalManager.close());
          }),
          (t[4] = n),
          (t[5] = d))
        : (d = t[5]);
      var p = d,
        _ = m,
        f;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = s._(/*BTDS*/ "Request phone number?")), (t[6] = f))
        : (f = t[6]);
      var g = f,
        h;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = s._(
            /*BTDS*/ "This person's phone number is not shared in this chat. You can request for their phone number if you'd like to save them to your contacts.",
          )),
          (t[7] = h))
        : (h = t[7]);
      var y = h,
        C;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = s._(/*BTDS*/ "Send request")), (t[8] = C))
        : (C = t[8]);
      var b = C,
        v;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Cancel")), (t[9] = v))
        : (v = t[9]);
      var S = v,
        R;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { surface: "unknown", viewName: "request-phone-number" }),
          (t[10] = R))
        : (R = t[10]);
      var L;
      return (
        t[11] !== p
          ? ((L = u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: R,
              onOK: p,
              okText: b,
              onCancel: _,
              cancelText: S,
              title: g,
              children: y,
            })),
            (t[11] = p),
            (t[12] = L))
          : (L = t[12]),
        L
      );
    }
    function m() {
      return o("WAWebModalManager").ModalManager.close();
    }
    l.default = d;
  },
  226,
);
