__d(
  "FXErrorContent",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = s._(/*BTDS*/ "Something went wrong"),
      u = s._(/*BTDS*/ "OK"),
      c = s._(
        /*BTDS*/ "This account may not have been removed from your Accounts Center. You can check to see if it was removed and try again if it wasn't.",
      ),
      d = s._(/*BTDS*/ "You can try again later or use another account."),
      m = s._(/*BTDS*/ "Try changing your settings later."),
      p = { body: c, button_label: u, title: e },
      _ = s._(
        /*BTDS*/ "This profile may not have been moved out of your Meta Account. You can check to see if it was moved out and try again if it wasn't.",
      ),
      f = { body: _, button_label: u, title: e },
      g = { body: d, button_label: u, title: e },
      h = {
        description: m.toString(),
        dismiss_label: u.toString(),
        primary_action: null,
        title: e.toString(),
      },
      y = {
        body: d,
        primary_button: { action: "EXIT_FLOW", label: u },
        title: e,
      },
      C = {
        description: c.toString(),
        dismiss_label: u.toString(),
        primary_action: null,
        title: e.toString(),
      },
      b = s._(/*BTDS*/ "You've recently changed your birthday"),
      v = s._(
        /*BTDS*/ "There is a limit to how many times you can change your birthday, so you may have to wait a few days if you've recently changed it.",
      ),
      S = {
        description: v.toString(),
        dismiss_label: u.toString(),
        primary_action: null,
        title: b.toString(),
      },
      R = s._(/*BTDS*/ "Unable to change birthday"),
      L = s._(
        /*BTDS*/ "Your birthday indicates that you are below the age required to use Meta technologies.",
      ),
      E = {
        description: L.toString(),
        dismiss_label: u.toString(),
        primary_action: null,
        title: R.toString(),
      };
    ((l.GENERIC_ERROR_TITLE = e),
      (l.GENERIC_ERROR_BUTTON_LABEL = u),
      (l.GENERIC_ERROR_BODY = m),
      (l.GENERIC_UNLINKING_FLOW_ERROR_CONTENT = p),
      (l.GENERIC_FETA_SPLIT_FLOW_ERROR_CONTENT = f),
      (l.GENERIC_LINKING_FLOW_ERROR_CONTENT = g),
      (l.GENERIC_SETTINGS_ERROR_CONTENT = h),
      (l.GENERIC_ERROR_DIALOG_CONTENT = y),
      (l.GENERIC_CREDENTIAL_REMOVE_ERROR_CONTENT = C),
      (l.BIRTHDAY_COOLDOWN_ERROR_CONTENT = S),
      (l.BIRTHDAY_UNDER_AGE_ERROR_CONTENT = E));
  },
  226,
);
