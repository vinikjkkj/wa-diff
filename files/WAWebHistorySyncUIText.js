__d(
  "WAWebHistorySyncUIText",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function () {
        return s._(/*BTDS*/ "Loading your chats");
      },
      d = function (t) {
        return s._(/*BTDS*/ "Syncing older messages. {=m2}", [
          s._implicitParam(
            "=m2",
            u.jsx("button", {
              className: "x1ph7ams",
              onClick: t,
              children: s._(/*BTDS*/ "See progress."),
            }),
          ),
        ]);
      },
      m = function () {
        return s._(/*BTDS*/ "Syncing older messages. Click to see progress.");
      },
      p = function () {
        return s._(/*BTDS*/ "Syncing older messages");
      },
      _ = function () {
        return s._(
          /*BTDS*/ "Keep WhatsApp open on your phone while syncing older messages. To see your full chat history, check your phone.",
        );
      },
      f = function (t) {
        return s._(/*BTDS*/ '_j{"*":"{percentage}\\u0025"}', [
          s._param("percentage", t, [0]),
        ]);
      },
      g = function () {
        return s._(/*BTDS*/ "Syncing older messages");
      },
      h = function (t) {
        return s._(/*BTDS*/ '_j{"*":"{percentage}\\u0025 complete"}', [
          s._param("percentage", t, [0]),
        ]);
      },
      y = function () {
        return s._(
          /*BTDS*/ "Syncing paused. Open WhatsApp on your phone to continue syncing.",
        );
      },
      C = function () {
        return s._(
          /*BTDS*/ "Syncing paused. Open WhatsApp on your phone to continue syncing.",
        );
      },
      b = function () {
        return s._(/*BTDS*/ "Syncing paused");
      },
      v = function () {
        return s._(/*BTDS*/ "Open WhatsApp on your phone");
      },
      S = function () {
        return s._(/*BTDS*/ "Syncing paused");
      },
      R = function () {
        return s._(
          /*BTDS*/ "Syncing of older messages has paused. Open WhatsApp on your phone to continue syncing. You can still send and receive messages here.",
        );
      };
    ((l.SYNC_LOADING = c),
      (l.SYNC_IN_PROGRESS_CONTEXTUAL_DRAWER = d),
      (l.SYNC_IN_PROGRESS_CONTEXTUAL_SYSTEM_MESSAGE_TEXT = m),
      (l.SYNCING_OLDER_MESSAGES_MODAL_TITLE = p),
      (l.SYNCING_OLDER_MESSAGES_MODAL_TEXT = _),
      (l.SYNCING_OLDER_MESSAGES_MODAL_PERCENT = f),
      (l.SYNCING_OLDER_MESSAGES_SETTINGS_TITLE = g),
      (l.SYNCING_OLDER_MESSAGES_SETTINGS_PERCENT_COMPLETE = h),
      (l.SYNCING_PAUSED_CONTEXTUAL_SYSTEM_MESSAGE_TEXT = y),
      (l.SYNCING_PAUSED_CONTEXTUAL_TEXT = C),
      (l.SYNCING_PAUSED_GLOBAL_SETTINGS_TITLE = b),
      (l.SYNCING_PAUSED_GLOBAL_SETTINGS_SUBTITLE = v),
      (l.SYNCING_PAUSED_POPUP_TITLE = S),
      (l.SYNCING_PAUSED_POPUP_DESC = R));
  },
  226,
);
