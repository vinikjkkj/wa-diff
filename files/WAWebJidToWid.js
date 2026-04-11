__d(
  "WAWebJidToWid",
  ["WAJids", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebWidFactory").createUserWidOrThrow(e);
    }
    function s(e) {
      return o("WAWebWidFactory").createUserLidOrThrow(e);
    }
    function u(e) {
      return o("WAWebWidFactory").asUserWidOrThrow(
        o("WAWebWidFactory").createWid(e),
      );
    }
    function c(e) {
      return o("WAWebWidFactory").createUserLidOrThrow(e);
    }
    function d(e) {
      return o("WAWebWidFactory").createDeviceWidOrThrow(e);
    }
    function m(e) {
      return o("WAWebWidFactory").asChatWid(o("WAWebWidFactory").createWid(e));
    }
    function p(e) {
      return o("WAWebWidFactory").createWid(e);
    }
    function _(e) {
      var t = o("WAJids").extractJidFromJidWithType(e);
      return o("WAWebWidFactory").createWid(t);
    }
    function f(e) {
      return o("WAWebWidFactory").createWid(e);
    }
    ((l.userJidToUserWid = e),
      (l.lidUserJidToUserLid = s),
      (l.deviceJidToUserWid = u),
      (l.lidDeviceJidToUserLid = c),
      (l.deviceJidToDeviceWid = d),
      (l.chatJidToChatWid = m),
      (l.groupJidToWid = p),
      (l.jidWithTypeToWid = _),
      (l.newsletterJidToWid = f));
  },
  98,
);
