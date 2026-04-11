__d(
  "WAWebGroupStringsAction",
  [
    "fbt",
    "WAWebContactCollection",
    "WAWebFbtIntlList",
    "WAWebFrontendContactGetters",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      return u(e, y, C, b, t);
    }
    function u(e, t, n, a, i) {
      var l;
      if (e.status === 207) {
        var s = {};
        e.participants.forEach(function (e) {
          var t = e.userWid;
          if (r("WAWebWid").isWid(t)) {
            var n = e.code,
              a = n;
            if (n !== "403" && n !== "207") {
              if (n === "421") {
                var i,
                  l,
                  u =
                    (i =
                      (l = e.subCode) == null
                        ? void 0
                        : l.membershipApprovalRequestError) != null
                      ? i
                      : "";
                a = n + ":" + u;
              }
              s[a] || (s[a] = []);
              var c = o("WAWebContactCollection").ContactCollection.get(t);
              c && s[a].push(c);
            }
          }
        });
        var u = [];
        for (var p in s) {
          var _ = p.split(":"),
            f = _[0],
            g = _[1] != null && _[1] !== "" ? parseInt(_[1], 10) : void 0,
            h = c(t, n, m, parseInt(f, 10), g, s[p]);
          h && u.push(h);
        }
        u.length > 0 ? (l = u.join("\n")) : (l = a());
      } else l = c(t, n, d, e.status, void 0, i);
      return l;
    }
    function c(e, t, n, a, i, l) {
      var s = r("WAWebFbtIntlList")(
          l.map(function (e) {
            return o("WAWebFrontendContactGetters").getFormattedShortName(e);
          }),
          r("WAWebFbtIntlList").CONJUNCTIONS.NONE,
          r("WAWebFbtIntlList").DELIMITERS.COMMA,
        ).toString(),
        u = a === 200,
        c = u ? e(s, l.length) : t(s, l.length, a),
        d = u ? "" : n(a, i, l.length);
      return c.toString() + d.toString();
    }
    function d(e, t) {
      var n = "";
      switch (e) {
        case 403:
          n = " " + s._(/*BTDS*/ "You're not a member.").toString();
          break;
        case 408:
          n =
            " " +
            s
              ._(
                /*BTDS*/ '_j{"*":"You can\'t add these members because they left the group recently.","_1":"You can\'t add this member because they left the group recently."}',
                [s._plural(1)],
              )
              .toString();
          break;
        case 404:
          n = " " + s._(/*BTDS*/ "This group has ended.").toString();
          break;
        case 429:
          n =
            " " +
            s
              ._(
                /*BTDS*/ "You've added too many contacts to groups too quickly. Try again later.",
              )
              .toString();
          break;
      }
      return n;
    }
    function m(e, t, n) {
      var r = "";
      switch (e) {
        case 401:
        case 406:
        case 409:
          break;
        case 404:
          r =
            " " +
            s
              ._(/*BTDS*/ '_j{"*":"They are no longer in this group."}', [
                s._plural(n),
              ])
              .toString();
          break;
        case 408:
          r =
            " " +
            s
              ._(
                /*BTDS*/ '_j{"*":"You can\'t add these members because they left the group recently.","_1":"You can\'t add this member because they left the group recently."}',
                [s._plural(n)],
              )
              .toString();
          break;
        case 419:
          r = " " + s._(/*BTDS*/ "The community is full.").toString();
          break;
        case 421: {
          t == null
            ? (r =
                " " +
                s
                  ._(
                    /*BTDS*/ '_j{"*":"Members pending admin approval.","_1":"Member pending admin approval."}',
                    [s._plural(n)],
                  )
                  .toString())
            : t === 304 &&
              (r =
                " " +
                s
                  ._(/*BTDS*/ "Already requested. Admin approval is pending.")
                  .toString());
          break;
        }
        case 402: {
          r =
            " " +
            s
              ._(
                /*BTDS*/ '_j{"*":"Members cannot be added because they were previously removed by an admin.","_1":"Member cannot be added because they were previously removed by an admin."}',
                [s._plural(n)],
              )
              .toString();
          break;
        }
        case 500:
          r = " " + s._(/*BTDS*/ "This group is full.").toString();
          break;
        default:
          r = " " + s._(/*BTDS*/ "Please try again.").toString();
          break;
      }
      return r;
    }
    function p(e, t) {
      return s._(/*BTDS*/ '_j{"*":"Adding {memberNames}."}', [
        s._plural(t),
        s._param("memberNames", e),
      ]);
    }
    function _(e, t) {
      return s._(/*BTDS*/ '_j{"*":"You added {memberNames}."}', [
        s._plural(t),
        s._param("memberNames", e),
      ]);
    }
    function f(e, t, n) {
      return s._(/*BTDS*/ '_j{"*":"Couldn\'t add {memberNames}."}', [
        s._plural(t),
        s._param("memberNames", e),
      ]);
    }
    function g() {
      return s._(/*BTDS*/ "Couldn't add some members.");
    }
    function h(e, t) {
      return s._(/*BTDS*/ '_j{"*":"Removing {memberNames}."}', [
        s._plural(t),
        s._param("memberNames", e),
      ]);
    }
    function y(e, t) {
      return s._(/*BTDS*/ '_j{"*":"You removed {memberNames}."}', [
        s._plural(t),
        s._param("memberNames", e),
      ]);
    }
    function C(e, t, n) {
      switch (n) {
        case 406:
          return s._(
            /*BTDS*/ "You can't remove {member} because they created this group.",
            [s._param("member", e)],
          );
        default:
          return s._(/*BTDS*/ '_j{"*":"Couldn\'t remove {memberNames}."}', [
            s._plural(t),
            s._param("memberNames", e),
          ]);
      }
    }
    function b() {
      return s._(/*BTDS*/ "Couldn't remove some members.");
    }
    function v(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"{memberNames} are now group admins.","_1":"{memberNames} is now a group admin."}',
        [s._plural(t), s._param("memberNames", e)],
      );
    }
    function S(e, t, n) {
      return s._(
        /*BTDS*/ '_j{"*":"Couldn\'t make {memberNames} admins.","_1":"Couldn\'t make {memberNames} an admin."}',
        [s._plural(t), s._param("memberNames", e)],
      );
    }
    function R() {
      return s._(/*BTDS*/ "Couldn't make some members admin.");
    }
    function L(e, t, n) {
      switch (n) {
        case 406:
          return s._(
            /*BTDS*/ "You can't dismiss {member} as admin because they created this group.",
            [s._param("member", e)],
          );
        default:
          return s._(
            /*BTDS*/ '_j{"*":"Removing {memberNames} as admins failed.","_1":"Removing {memberNames} as an admin failed."}',
            [s._plural(t), s._param("memberNames", e)],
          );
      }
    }
    function E(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"{memberNames} are no longer group admins.","_1":"{memberNames} is no longer a group admin."}',
        [s._plural(t), s._param("memberNames", e)],
      );
    }
    function k() {
      return s._(/*BTDS*/ "Couldn't remove some members as an admin.");
    }
    ((l.formatRemoveResult = e),
      (l.formatResult = u),
      (l.addingString = p),
      (l.addSuccessString = _),
      (l.addFailedString = f),
      (l.addPartialFailedString = g),
      (l.removingString = h),
      (l.promoteSuccessString = v),
      (l.promoteFailedString = S),
      (l.promotePartialFailedString = R),
      (l.demoteFailedString = L),
      (l.demoteSuccessString = E),
      (l.demotePartialFailedString = k));
  },
  226,
);
