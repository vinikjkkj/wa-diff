__d(
  "WAWebHistorySyncUIText",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = function (t) {
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
    function d() {
      return s._(/*BTDS*/ "Syncing older messages. Click to see progress.");
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return s._(/*BTDS*/ "Syncing older messages");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(
        /*BTDS*/ "Keep WhatsApp open on your phone while syncing older messages. To see your full chat history, check your phone.",
      );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      return s._(/*BTDS*/ '_j{"*":"{percentage}\\u0025"}', [
        s._param("percentage", e, [0]),
      ]);
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Syncing older messages");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g(e) {
      return s._(/*BTDS*/ '_j{"*":"{percentage}\\u0025 complete"}', [
        s._param("percentage", e, [0]),
      ]);
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(
        /*BTDS*/ "Syncing paused. Open WhatsApp on your phone to continue syncing.",
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(
        /*BTDS*/ "Syncing paused. Open WhatsApp on your phone to continue syncing.",
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Syncing paused");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Open WhatsApp on your phone");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Syncing paused");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(
        /*BTDS*/ "Syncing of older messages has paused. Open WhatsApp on your phone to continue syncing. You can still send and receive messages here.",
      );
    }
    ((S.displayName = S.name + " [from " + i.id + "]"),
      (l.SYNC_IN_PROGRESS_CONTEXTUAL_DRAWER = c),
      (l.SYNC_IN_PROGRESS_CONTEXTUAL_SYSTEM_MESSAGE_TEXT = d),
      (l.SYNCING_OLDER_MESSAGES_MODAL_TITLE = m),
      (l.SYNCING_OLDER_MESSAGES_MODAL_TEXT = p),
      (l.SYNCING_OLDER_MESSAGES_MODAL_PERCENT = _),
      (l.SYNCING_OLDER_MESSAGES_SETTINGS_TITLE = f),
      (l.SYNCING_OLDER_MESSAGES_SETTINGS_PERCENT_COMPLETE = g),
      (l.SYNCING_PAUSED_CONTEXTUAL_SYSTEM_MESSAGE_TEXT = h),
      (l.SYNCING_PAUSED_CONTEXTUAL_TEXT = y),
      (l.SYNCING_PAUSED_GLOBAL_SETTINGS_TITLE = C),
      (l.SYNCING_PAUSED_GLOBAL_SETTINGS_SUBTITLE = b),
      (l.SYNCING_PAUSED_POPUP_TITLE = v),
      (l.SYNCING_PAUSED_POPUP_DESC = S));
  },
  226,
);
