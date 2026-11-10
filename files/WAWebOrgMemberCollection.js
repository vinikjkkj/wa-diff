__d(
  "WAWebOrgMemberCollection",
  ["WAWebCollection", "WAWebOrgMemberModel", "WAWebOrgMemberOrder"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
          r[o] = arguments[o];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.isComplete = !1),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.applyList = function (t, n) {
          var e = this,
            r = n.complete,
            a = n.inServerOrder,
            i = new Set(
              t.map(function (e) {
                return e.id;
              }),
            );
          this.remove(
            this.filter(function (e) {
              return !i.has(e.id);
            }),
            { silent: !0 },
          );
          var l = [];
          (t.forEach(function (t) {
            var n = e.get(t.id);
            n != null ? n.set(t) : r && l.push(t);
          }),
            this.add(l, { silent: !0 }),
            this.sort({
              comparator: a ? u(t) : o("WAWebOrgMemberOrder").compareOrgMembers,
              silent: !0,
            }),
            r && (this.isComplete = !0));
        }),
        (n.upsertMember = function (t) {
          var e = this.get(t.id);
          if (e == null) {
            this.add(t, {
              at: o("WAWebOrgMemberOrder").findOrgMemberInsertIndex(
                this.getModelsArray(),
                t,
              ),
              silent: !0,
            });
            return;
          }
          var n = o("WAWebOrgMemberOrder").compareOrgMembers(e, t) !== 0;
          if ((e.set(t), n)) {
            var r = this.filter(function (t) {
              return t !== e;
            });
            this.reorderMutate(
              this.indexOf(e),
              o("WAWebOrgMemberOrder").findOrgMemberInsertIndex(r, e),
            );
          }
        }),
        (n.removeMember = function (t) {
          this.remove(t, { silent: !0 });
        }),
        (n.clearMembers = function () {
          (this.remove(this.getModelsArray().slice(), { silent: !0 }),
            (this.isComplete = !1));
        }),
        t
      );
    })(r("WAWebCollection"));
    e.model = o("WAWebOrgMemberModel").OrgMember;
    function s(e) {
      var t,
        n,
        r,
        o,
        a,
        i = e.memberName === e.lid;
      return {
        firstName:
          i || e.firstName === e.lid ? "" : (t = e.firstName) != null ? t : "",
        id: e.lid,
        lastName: (n = e.lastName) != null ? n : "",
        memberName: i ? "" : e.memberName,
        memberTag: e.memberTag === "" ? null : e.memberTag,
        phoneNumber: (r = e.phoneNumber) != null ? r : null,
        role: (o = e.role) != null ? o : null,
        username: (a = e.username) != null ? a : null,
      };
    }
    function u(e) {
      var t = new Map(
        e.map(function (e, t) {
          return [e.id, t];
        }),
      );
      return function (e, n) {
        var r, o;
        return (
          ((r = t.get(e.id)) != null ? r : 0) -
          ((o = t.get(n.id)) != null ? o : 0)
        );
      };
    }
    ((l.OrgMemberCollection = e), (l.toOrgMemberAttrs = s));
  },
  98,
);
