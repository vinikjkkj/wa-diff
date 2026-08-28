__d(
  "SearchableEntry",
  ["FbtResultBase", "cr:556", "isValidUniqueID"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null || e === "") return "";
      if (typeof e == "string") return e;
      if (e instanceof r("FbtResultBase")) return e.toString();
      if (typeof e == "object") {
        var t = n("cr:556").replaceJSONWrapper(e);
        if (n("cr:556").isHTML(t)) {
          var o = t.getRootNode();
          return o.textContent || o.innerText || "";
        } else return "";
      } else return "";
    }
    var s = (function () {
      function t(t) {
        ((this.valueOf = this.getUniqueID),
          r("isValidUniqueID")(t.uniqueID) || (t.uniqueID = "null"),
          (this.$8 = t.uniqueID + ""),
          t.title instanceof r("FbtResultBase") &&
            (t.title = t.title.toString()),
          (t.title != null && typeof t.title == "string") || (t.title = "null"),
          (this.$6 = t.title),
          (this.$3 = t.order || 0),
          (this.$5 = e(t.subtitle)),
          (this.$2 = t.keywordString || ""),
          (this.$4 = t.photo || ""),
          (this.$9 = t.uri || ""),
          (this.$7 = e(t.type)));
        var n = t.auxiliaryData == null ? {} : t.auxiliaryData;
        ((this.$1 = n),
          (this.$10 = t.dataType || ""),
          (this.$11 = t.isDisabled || !1),
          (this.$12 = t.tooltip || ""),
          (this.$13 = t.badge || ""));
      }
      var n = t.prototype;
      return (
        (n.getUniqueID = function () {
          return this.$8;
        }),
        (n.getOrder = function () {
          return this.$3;
        }),
        (n.getTitle = function () {
          return this.$6;
        }),
        (n.getSubtitle = function () {
          return this.$5;
        }),
        (n.getKeywordString = function () {
          return this.$2;
        }),
        (n.getPhoto = function () {
          return this.$4;
        }),
        (n.getURI = function () {
          return this.$9;
        }),
        (n.getType = function () {
          return this.$7;
        }),
        (n.getAuxiliaryData = function () {
          return this.$1;
        }),
        (n.getDataType = function () {
          return this.$10;
        }),
        (n.getIsDisabled = function () {
          return this.$11;
        }),
        (n.getTooltip = function () {
          return this.$12 === "" ? null : this.$12;
        }),
        (n.getBadge = function () {
          return this.$13;
        }),
        (n.toPlainObject = function () {
          return {
            auxiliaryData: this.$1,
            keywordString: this.$2,
            order: this.$3,
            photo: this.$4,
            subtitle: this.$5,
            title: this.$6,
            type: this.$7,
            uniqueID: this.$8,
            uri: this.$9,
            dataType: this.$10,
            isDisabled: this.$11,
            tooltip: this.$12,
            badge: this.$13,
          };
        }),
        t
      );
    })();
    l.default = s;
  },
  98,
);
