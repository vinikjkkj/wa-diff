__d(
  "AdsICMessagesMap",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { messagesMap: r("immutable").OrderedMap() },
      s = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.setMessage = function (t, n) {
            return this.setMessagesMap(this.getMessagesMap().set(t, n));
          }),
          (n.addMessage = function (t) {
            return this.setMessage(t.getID(), t);
          }),
          (n.removeMessage = function (t) {
            return this.setMessagesMap(this.getMessagesMap().delete(t));
          }),
          (n.setMessagesMap = function (t) {
            return this.set("messagesMap", t);
          }),
          (n.filter = function (t) {
            return this.setMessagesMap(this.getMessagesMap().filter(t));
          }),
          (n.sortByScore = function () {
            return this.setMessagesMap(
              this.getMessagesMap().sortBy(function (e) {
                return -e.getScore();
              }),
            );
          }),
          (n.moveAllowlistedToFront = function () {
            return this.setMessagesMap(
              this.getMessagesMap().sortBy(function (e) {
                return e.getMustShow() ? -1 : 0;
              }),
            );
          }),
          (n.hasMessage = function (t) {
            return this.getMessagesMap().has(t);
          }),
          (n.getMessage = function (t) {
            return this.getMessagesMap().get(t);
          }),
          (n.getMessagesMap = function () {
            return this.get("messagesMap");
          }),
          (n.getAll = function () {
            return this.getMessagesMap();
          }),
          (n.getMessageIDs = function () {
            return this.getMessagesMap().keySeq().toArray();
          }),
          t
        );
      })(r("immutable").Record(e));
    l.default = s;
  },
  98,
);
