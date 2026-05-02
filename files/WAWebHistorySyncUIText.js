__d(
  "WAWebHistorySyncUIText",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Loading your chats");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    var d = function (t) {
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
    };
    function m() {
      return s._(/*BTDS*/ "Syncing older messages. Click to see progress.");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "Syncing older messages");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(
        /*BTDS*/ "Keep WhatsApp open on your phone while syncing older messages. To see your full chat history, check your phone.",
      );
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return s._(/*BTDS*/ '_j{"*":"{percentage}\\u0025"}', [
        s._param("percentage", e, [0]),
      ]);
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Syncing older messages");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      return s._(/*BTDS*/ '_j{"*":"{percentage}\\u0025 complete"}', [
        s._param("percentage", e, [0]),
      ]);
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(
        /*BTDS*/ "Syncing paused. Open WhatsApp on your phone to continue syncing.",
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(
        /*BTDS*/ "Syncing paused. Open WhatsApp on your phone to continue syncing.",
      );
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Syncing paused");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Open WhatsApp on your phone");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "Syncing paused");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(
        /*BTDS*/ "Syncing of older messages has paused. Open WhatsApp on your phone to continue syncing. You can still send and receive messages here.",
      );
    }
    ((R.displayName = R.name + " [from " + i.id + "]"),
      (l.SYNC_LOADING = c),
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
