__d(
  "GroupsCometAAV5ApplyCriteriaTransforms",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      action: function (n) {
        return {
          action_id: null,
          action_input: e.input(n.input),
          action_type: n.type,
        };
      },
      command: function (n, r) {
        var t;
        return (
          r === void 0 && (r = !1),
          {
            actions: [e.action(n.primaryAction)],
            command_id: r ? null : n.id,
            condition_operator_type: n.conditionOperatorType,
            conditions: n.conditions.map(function (t) {
              return e.condition(t);
            }),
            trigger_type: (t = n.metadata) == null ? void 0 : t.triggerType,
          }
        );
      },
      commandSequence: function (n, r) {
        return (
          r === void 0 && (r = !1),
          {
            category: n.category,
            commands: n.commands.map(function (t) {
              return e.command(t, r);
            }),
          }
        );
      },
      condition: function (n, r) {
        return (
          r === void 0 && (r = !1),
          {
            actions:
              n.secondaryAction != null || n.feedbackAction != null
                ? [n.secondaryAction, n.feedbackAction]
                    .filter(Boolean)
                    .map(e.action)
                : null,
            condition_id: r ? n.id : null,
            condition_input: e.input(n.input),
            condition_type: n.type,
            enabled_by_source: n.enabledBySource,
          }
        );
      },
      input: function (t) {
        return {
          input_type: t.type,
          int_array_input: t.intArrayInput,
          int_input: t.intInput,
          negate_input: t.negateInput,
          string_array_input: t.stringArrayInput,
          string_input: t.stringInput,
        };
      },
    };
    i.applyCriteriaTransforms = e;
  },
  66,
);
