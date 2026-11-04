__d(
  "WAWebCustomerManagerSearchValueCache",
  [
    "WAWebCustomerContactResolver",
    "WAWebCustomerManagerChatResolver",
    "WAWebCustomerManagerDateFormatUtils",
    "WAWebCustomerManagerSearchValueMatcher",
    "WAWebCustomerProfileAcquisitionSourceNames",
    "WAWebL10NAccentFold",
    "WAWebLabelCollection",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e4,
      s = 512,
      u = 1024,
      c = (function () {
        function t(t) {
          (t === void 0 && (t = e),
            (this.$1 = new Map()),
            (this.$4 = new Map()),
            (this.$5 = new Map()),
            (this.$6 = new Map()),
            (this.$2 = t));
        }
        var n = t.prototype;
        return (
          (n.prepareForQuery = function () {
            var e = new Intl.DateTimeFormat().resolvedOptions().timeZone;
            e !== this.$3 && (this.clear(), (this.$3 = e));
          }),
          (n.matchesText = function (t, n, r, a) {
            var e = this.$7(String(t.chatJid)),
              i = e.text;
            if (
              i == null ||
              i.email !== t.email ||
              i.address !== t.address ||
              i.altPhoneNumbers !== t.altPhoneNumbers ||
              i.lastOrderDescription !== t.lastOrderDescription ||
              i.acquisitionSource !== t.acquisitionSource ||
              i.leadStage !== t.leadStage ||
              i.noteContent !== n
            ) {
              var l =
                  t.acquisitionSource == null
                    ? null
                    : o(
                        "WAWebCustomerProfileAcquisitionSourceNames",
                      ).getProfileAcquisitionSourceLabel(t.acquisitionSource),
                s = o("WAWebLeadStage").getLeadStageFromNumber(t.leadStage);
              ((i = {
                acquisitionSource: t.acquisitionSource,
                address: t.address,
                altPhoneNumbers: t.altPhoneNumbers,
                email: t.email,
                lastOrderDescription: t.lastOrderDescription,
                leadStage: t.leadStage,
                noteContent: n,
                values: this.$8(
                  [t.email, t.address, t.lastOrderDescription, n].concat(
                    m(t.altPhoneNumbers),
                    [
                      l == null ? null : String(l),
                      s == null
                        ? null
                        : String(o("WAWebLeadStageNames").getLeadStageName(s)),
                    ],
                  ),
                ),
              }),
                (e.text = i));
            }
            return d(i.values, r, a);
          }),
          (n.matchesDates = function (t, n, r) {
            var e;
            if (/^[0-9]{1,7}$/.test(n)) return !1;
            var a = this.$7(String(t.chatJid)),
              i =
                (e = o(
                  "WAWebCustomerManagerChatResolver",
                ).resolveCustomerManagerChat(t.chatJid)) == null
                  ? void 0
                  : e.t,
              l = a.dates;
            return (
              (l == null ||
                l.birthday !== t.birthday ||
                l.createdAt !== t.createdAt ||
                l.modifiedAt !== t.modifiedAt ||
                l.lastMessageAt !== i) &&
                ((l = {
                  birthday: t.birthday,
                  createdAt: t.createdAt,
                  lastMessageAt: i,
                  modifiedAt: t.modifiedAt,
                  values: [].concat(
                    this.$9(t.birthday),
                    this.$8(
                      [].concat(
                        p(i, "instant"),
                        p(t.createdAt, "instant", !1),
                        p(t.modifiedAt, "instant", !1),
                      ),
                    ),
                  ),
                }),
                (a.dates = l)),
              d(l.values, n, r != null && r.length >= 8 ? r : null)
            );
          }),
          (n.matchesLabels = function (t, n, r, a) {
            var e,
              i = String(t.chatJid),
              l = this.$7(i),
              s = (e = n == null ? void 0 : n.labels) != null ? e : [],
              u = l.labels;
            if (
              u == null ||
              u.contact !== n ||
              u.contactLabelIds.length !== s.length ||
              !u.contactLabelIds.every(function (e, t) {
                return e === s[t];
              })
            ) {
              this.$10(i, u);
              var c = Array.from(
                new Set(
                  [].concat(
                    s,
                    o("WAWebCustomerContactResolver").resolveCustomerLabelIds(
                      i,
                    ),
                  ),
                ),
              );
              if (
                ((u = {
                  contact: n,
                  contactLabelIds: [].concat(s),
                  labelIds: c,
                  values: this.$8(
                    c.map(function (e) {
                      var t;
                      return (t = o("WAWebLabelCollection").LabelCollection.get(
                        e,
                      )) == null
                        ? void 0
                        : t.name;
                    }),
                  ),
                }),
                (l.labels = u),
                this.$1.get(i) === l)
              )
                for (var m of c) {
                  var p = this.$5.get(m);
                  (p == null && ((p = new Set()), this.$5.set(m, p)), p.add(i));
                }
            }
            return d(u.values, r, a);
          }),
          (n.invalidateLabel = function (t) {
            for (var e of (n = this.$5.get(t)) != null ? n : []) {
              var n,
                r = this.$1.get(e);
              r != null && (this.$10(e, r.labels), delete r.labels);
            }
          }),
          (n.invalidateCustomer = function (t) {
            var e;
            (this.$10(t, (e = this.$1.get(t)) == null ? void 0 : e.labels),
              this.$1.delete(t));
          }),
          (n.clear = function () {
            (this.$1.clear(),
              this.$4.clear(),
              this.$5.clear(),
              this.$6.clear());
          }),
          (n.$10 = function (t, n) {
            for (var e of (r = n == null ? void 0 : n.labelIds) != null
              ? r
              : []) {
              var r,
                o = this.$5.get(e);
              o != null && (o.delete(t), o.size === 0 && this.$5.delete(e));
            }
          }),
          (n.$9 = function (t) {
            if (t == null || t === 0) return [];
            var e = this.$4.get(t);
            if (e != null) return e;
            var n = this.$8(p(t, "birthday"));
            return (this.$4.size < s && this.$4.set(t, n), n);
          }),
          (n.$8 = function (t) {
            var e = [];
            for (var n of t)
              if (!(n == null || n === "")) {
                var r = this.$6.get(n);
                (r == null &&
                  ((r = { folded: o("WAWebL10NAccentFold").accentFold(n) }),
                  this.$6.size < u && this.$6.set(n, r)),
                  e.push(r));
              }
            return e;
          }),
          (n.$7 = function (t) {
            var e = this.$1.get(t);
            return (
              e == null &&
                ((e = {}), this.$1.size < this.$2 && this.$1.set(t, e)),
              e
            );
          }),
          t
        );
      })();
    function d(e, t, n) {
      return e.some(function (e) {
        if (e.folded.includes(t)) return !0;
        if (n == null) return !1;
        var r = e.digits;
        return (
          r == null && ((r = e.folded.replace(/[^0-9]/g, "")), (e.digits = r)),
          r !== "" && r.includes(n)
        );
      });
    }
    function m(e) {
      if (e == null || e === "") return [];
      var t;
      try {
        t = JSON.parse(e);
      } catch (t) {
        return [e];
      }
      return Array.isArray(t)
        ? t.filter(function (e) {
            return typeof e == "string";
          })
        : [e];
    }
    function p(e, t, n) {
      if ((n === void 0 && (n = !0), e == null || e === 0)) return [];
      var r = new Date(e * 1e3);
      if (!Number.isFinite(r.getTime())) return [];
      var a = o("WAWebCustomerManagerSearchValueMatcher").formatSearchDateIso(
        r,
        t,
      );
      if (!n) return [a];
      var i =
        t === "birthday"
          ? o("WAWebCustomerManagerDateFormatUtils").formatCustomerBirthday(e)
          : t === "instant"
            ? o("WAWebCustomerManagerDateFormatUtils").formatCustomerDate(e)
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    t,
                );
              })();
      return [a, i];
    }
    l.CustomerSearchValueCache = c;
  },
  98,
);
