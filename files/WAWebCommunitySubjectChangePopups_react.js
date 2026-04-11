__d(
  "WAWebCommunitySubjectChangePopups.react",
  [
    "fbt",
    "WALogger",
    "WAWebConfirmPopup.react",
    "WAWebFbtCommon",
    "WAWebModalManager",
    "WAWebSetSubjectGroupAction",
    "fbs",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react"));
    function d(t) {
      var n = t.contact.name;
      (o("WAWebSetSubjectGroupAction")
        .setGroupSubject(t, n)
        .catch(function (t) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "community_half_success_error_popup:onSetSubject failed",
              ])),
          );
        }),
        o("WAWebModalManager").ModalManager.close());
    }
    function m() {
      return r("fbs")._(/*BTDS*/ "Error updating announcement group name");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.onOK,
        n = e.parentChat,
        a = m(),
        i = s._(
          /*BTDS*/ "The community name was updated but the announcement group was not. Click to try again.",
        );
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: a,
        onCancel: o("WAWebModalManager").closeModalManager,
        onOK: function () {
          (d(n), t == null || t());
        },
        okText: r("WAWebFbtCommon")("Try again"),
        children: i,
      });
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      r("vulture")("BPg5g77eKNz6PMh6xVVrRRWU6u4=");
      var t = e.parentChat,
        n = s._(/*BTDS*/ "Announcement group name was not updated"),
        a = s._(/*BTDS*/ "An error occurred. Click to try again.");
      return c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        title: n,
        onCancel: o("WAWebModalManager").closeModalManager,
        onOK: function () {
          return d(t);
        },
        okText: r("WAWebFbtCommon")("Try again"),
        children: a,
      });
    }
    ((_.displayName = _.name + " [from " + i.id + "]"),
      (l.getCommunitySubjectSyncingIssueTitle = m),
      (l.CommunitySubjectSyncingIssuePopup = p),
      (l.CommunitySubjectHalfSuccessErrorPopup = _));
  },
  226,
);
