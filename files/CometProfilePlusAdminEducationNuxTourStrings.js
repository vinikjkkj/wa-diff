__d(
  "CometProfilePlusAdminEducationNuxTourStrings",
  ["fbt", "FDSText.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Welcome to your new Page!");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      return s._(
        /*BTDS*/ "You're now switched out of your profile and into your Page {page_name}. This means you'll have more confidence that you're sharing, liking and commenting as the Page. See what else is new.",
        [
          s._param(
            "page_name",
            u.jsx(r("FDSText.react"), {
              color: "secondary",
              type: "bodyLink2",
              children: e,
            }),
          ),
        ],
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return s._(/*BTDS*/ "Take tour");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "Not Now");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "Explore your Page\u2019s Feed");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      return s._(
        /*BTDS*/ "Follow others as {page_name} and see their updates here. When you comment, your name appears with a Like button.",
        [
          s._param(
            "page_name",
            u.jsx(r("FDSText.react"), { type: "bodyLink2", children: e }),
          ),
        ],
      );
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Quickly get stuff done");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(
        /*BTDS*/ "See insights like top-performing content, create ads and explore tools to manage your Page\u2014all in one place.",
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Go here to start a tour of your new Page.");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Go here to start the tour again.");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Global Page Settings");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Manage your Global Page Settings here.");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "Location Page Settings");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      return e
        ? s._(
            /*BTDS*/ "Manage your Location Page Settings here. You can access the child page(s) through Location Manager.",
          )
        : s._(/*BTDS*/ "Manage your Location Page Settings here.");
    }
    ((R.displayName = R.name + " [from " + i.id + "]"),
      (l.getWelcomeModalTitle = c),
      (l.getWelcomeModalBody = d),
      (l.getWelcomeModalCTA = m),
      (l.getWelcomeModalCancelCTA = p),
      (l.getNewsfeedNuxTitle = _),
      (l.getNewsfeedNuxBody = f),
      (l.getManageNuxTitle = g),
      (l.getManageNuxBody = h),
      (l.getContextualTooltipAfterDismissing = y),
      (l.getContextualTooltip = C),
      (l.getGlobalPageTabNuxTitle = b),
      (l.getGlobalPageTabNuxBody = v),
      (l.getLocationPageTabNuxTitle = S),
      (l.getLocationPageTabNuxBody = R));
  },
  226,
);
