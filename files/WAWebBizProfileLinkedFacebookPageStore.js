__d(
  "WAWebBizProfileLinkedFacebookPageStore",
  ["WAWebCmd", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = new Map(),
      c = null,
      d = !1,
      m = new Set();
    function p() {
      y();
      var e = {};
      return (
        u.set(e, null),
        {
          publish: function (n) {
            (u.set(e, n), f());
          },
          release: function () {
            (u.delete(e), f());
          },
        }
      );
    }
    function _() {
      return s(h, g);
    }
    function f() {
      var e = null;
      (u.forEach(function (t) {
        t != null && (e = t);
      }),
        !C(c, e) &&
          ((c = e),
          m.forEach(function (e) {
            return e();
          })));
    }
    function g() {
      return c;
    }
    function h(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function y() {
      d ||
        ((d = !0),
        o("WAWebCmd").Cmd.on("logout_from_bridge", function () {
          (u.clear(), f());
        }));
    }
    function C(e, t) {
      return e == null || t == null
        ? e == null && t == null
        : e.pageId === t.pageId &&
            e.displayName === t.displayName &&
            e.pictureUrl === t.pictureUrl &&
            e.shownOnProfile === t.shownOnProfile;
    }
    ((l.createLinkedFacebookPagePublisher = p),
      (l.useLinkedFacebookPageFromStore = _));
  },
  98,
);
