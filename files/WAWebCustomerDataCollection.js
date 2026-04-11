__d(
  "WAWebCustomerDataCollection",
  [
    "WAWebAcquisitionSourceNames",
    "WAWebBaseCollection",
    "WAWebChatCollection",
    "WAWebClock",
    "WAWebContactCollection",
    "WAWebContactType",
    "WAWebContactTypeNames",
    "WAWebCustomerDataModel",
    "WAWebCustomerManagerSearchUtils",
    "WAWebFrontendContactGetters",
    "WAWebLabelCollection",
    "WAWebLeadStage",
    "WAWebLeadStageNames",
    "WAWebListItemParentType",
    "WAWebSearchUtils",
    "WAWebWidToJid",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("WAWebContactCollection").ContactCollection.get(e.chatJid),
        n = [];
      (t != null &&
        (n.push(o("WAWebFrontendContactGetters").getDisplayName(t)),
        n.push(
          o("WAWebFrontendContactGetters").getFormattedUsernameOrPhone(t),
        )),
        e.email != null && n.push(e.email),
        n.push(
          String(
            o("WAWebContactTypeNames").getContactTypeName(
              o("WAWebContactType").getContactTypeFromNumber(e.contactType),
            ),
          ),
        ));
      var r = o("WAWebLeadStage").getLeadStageFromNumber(e.leadStage);
      return (
        r != null && n.push(o("WAWebLeadStageNames").getLeadStageName(r)),
        n.push(o("WAWebClock").Clock.dsaDisplayDate(e.modifiedAt)),
        e.lastOrder != null &&
          n.push(o("WAWebClock").Clock.dsaDisplayDate(e.lastOrder)),
        o("WAWebSearchUtils").normalizeString(n.join(" "))
      );
    }
    var s = 86400;
    function u(e) {
      var t = new Date(),
        n = Math.floor(t.getTime() / 1e3);
      switch (e) {
        case "last_7_days":
          return n - 7 * s;
        case "last_14_days":
          return n - 14 * s;
        case "last_30_days":
          return n - 30 * s;
        case "last_3_months": {
          var r = new Date(t.getFullYear(), t.getMonth() - 3, t.getDate());
          return Math.floor(r.getTime() / 1e3);
        }
        case "last_year": {
          var o = new Date(t.getFullYear() - 1, t.getMonth(), t.getDate());
          return Math.floor(o.getTime() / 1e3);
        }
        default:
          return 0;
      }
    }
    function c(e, t, n, r) {
      if (e == null && t == null) return 0;
      if (e == null) return 1;
      if (t == null) return -1;
      var o;
      return (
        typeof e == "string" && typeof t == "string"
          ? (o = r.compare(e, t))
          : (o = Number(e) - Number(t)),
        n === "desc" ? -o : o
      );
    }
    function d(e, t) {
      if (e === "customer") {
        var n = o("WAWebContactCollection").ContactCollection.get(t.chatJid);
        return n != null
          ? o("WAWebFrontendContactGetters").getDisplayName(n)
          : null;
      } else if (e === "phone") {
        var r = o("WAWebContactCollection").ContactCollection.get(t.chatJid);
        return r != null
          ? o("WAWebFrontendContactGetters").getFormattedPhoneAndType(r)
              .displayName
          : null;
      } else if (e === "email") {
        var a;
        return (a = t.email) != null ? a : null;
      } else if (e === "leadStage") {
        var i;
        return (i = t.leadStage) != null ? i : null;
      } else if (e === "acquisitionSource") {
        var l = t.acquisitionSource;
        if (l == null) return null;
        var s = o(
          "WAWebAcquisitionSourceNames",
        ).getAcquisitionSourceDisplayName(l);
        return s != null ? String(s) : null;
      } else if (e === "list") {
        var u,
          c = o("WAWebLabelCollection").LabelCollection.getLabelsForModel(
            String(t.chatJid),
            o("WAWebListItemParentType").LabelItemParentType.Chat,
          );
        if (c.length === 0) return null;
        var d = o("WAWebLabelCollection").LabelCollection.get(c[0]);
        return (u = d == null ? void 0 : d.name) != null ? u : null;
      } else if (e === "lastMessage") {
        var m, p;
        return (m =
          (p = o("WAWebChatCollection").ChatCollection.get(t.chatJid)) == null
            ? void 0
            : p.t) != null
          ? m
          : null;
      } else if (e === "lastOrder") {
        var _;
        return (_ = t.lastOrder) != null ? _ : null;
      }
      return null;
    }
    var m = (function (t) {
      function n() {
        var e;
        return ((e = t.call(this) || this), (e.queriedChatJids = new Set()), e);
      }
      babelHelpers.inheritsLoose(n, t);
      var r = n.prototype;
      return (
        (r.maybeGetCustomerDataByChatJid = function (t) {
          var e = this.findFirst(function (e) {
            return e.chatJid === t;
          });
          return e != null ? e : null;
        }),
        (r.isCustomer = function (t) {
          var e = this.maybeGetCustomerDataByChatJid(
            o("WAWebWidToJid").widToChatJid(t.id),
          );
          return (
            e != null &&
            e.contactType === o("WAWebContactType").ContactType.CUSTOMER
          );
        }),
        (r.getCustomerModels = function () {
          return this.getModelsArray().filter(function (e) {
            return e.contactType === o("WAWebContactType").ContactType.CUSTOMER;
          });
        }),
        (r.hasCachedQueryForChatJid = function (t) {
          return this.queriedChatJids.has(t);
        }),
        (r.updateCollectionFromDB = function (t, n) {
          (this.queriedChatJids.add(t),
            n != null &&
              this.add(
                new (o("WAWebCustomerDataModel").CustomerData)(
                  babelHelpers.extends({}, n, { id: n.chatJid }),
                ),
                { merge: !0 },
              ));
        }),
        (r.initializeFromCache = function (t) {
          t.length !== 0 &&
            this.add(
              t.map(function (e) {
                return new (o("WAWebCustomerDataModel").CustomerData)(
                  babelHelpers.extends({}, e, { id: e.chatJid }),
                );
              }),
              { merge: !0 },
            );
        }),
        (r.filterCustomers = function (n, r) {
          var t = n;
          if (r.leadStages.length > 0) {
            var a = r.leadStages;
            t = t.filter(function (e) {
              var t = o("WAWebLeadStage").getLeadStageFromNumber(e.leadStage);
              return t != null && a.includes(t);
            });
          }
          if (r.acquisitionSource != null) {
            var i = r.acquisitionSource;
            t = t.filter(function (e) {
              return e.acquisitionSource === i;
            });
          }
          if (r.labelId != null) {
            var l = r.labelId;
            l === o("WAWebCustomerManagerSearchUtils").NO_LABEL_FILTER_ID
              ? (t = t.filter(function (e) {
                  return (
                    o("WAWebLabelCollection").LabelCollection.getLabelsForModel(
                      String(e.chatJid),
                      o("WAWebListItemParentType").LabelItemParentType.Chat,
                    ).length === 0
                  );
                }))
              : (t = t.filter(function (e) {
                  return o("WAWebLabelCollection")
                    .LabelCollection.getLabelsForModel(
                      String(e.chatJid),
                      o("WAWebListItemParentType").LabelItemParentType.Chat,
                    )
                    .includes(l);
                }));
          }
          if (r.lastMessageRange != null) {
            var s = u(r.lastMessageRange);
            t = t.filter(function (e) {
              var t = o("WAWebChatCollection").ChatCollection.get(e.chatJid);
              return t != null && t.t != null && t.t >= s;
            });
          }
          var c = o("WAWebSearchUtils").normalizeString(r.query);
          return (
            c !== "" &&
              (t = t.filter(function (t) {
                return e(t).includes(c);
              })),
            t
          );
        }),
        (r.sortCustomers = function (t, n) {
          if (n == null) return t;
          var e = n.direction,
            r = n.key,
            o = new Intl.Collator(),
            a = t.map(function (e) {
              return { item: e, value: d(r, e) };
            });
          return (
            a.sort(function (t, n) {
              return c(t.value, n.value, e, o);
            }),
            a.map(function (e) {
              return e.item;
            })
          );
        }),
        (r.purgeCustomerDataByChatJid = function (t) {
          var e = this.where({ chatJid: t });
          (this.remove(e), this.queriedChatJids.delete(t));
        }),
        n
      );
    })(o("WAWebBaseCollection").BaseCollection);
    m.model = o("WAWebCustomerDataModel").CustomerData;
    var p = new m();
    l.CustomerDataCollection = p;
  },
  98,
);
