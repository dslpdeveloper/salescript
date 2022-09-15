

(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "Add new permission": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435",
    "Add option": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442 \u043e\u0442\u0432\u0435\u0442\u0430",
    "Add question": "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441",
    "By Date": "\u041f\u043e \u0434\u0430\u0442\u0435",
    "By User": "\u041f\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044e",
    "Cancel": "\u041e\u0442\u043c\u0435\u043d\u0430",
    "Change and view": "\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435",
    "Date": "\u0414\u0430\u0442\u0430",
    "Description": "\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",
    "Entry": "\u041d\u0430\u0447\u0430\u043b\u043e",
    "Events total": "\u0412\u0441\u0435\u0433\u043e \u0441\u043e\u0431\u044b\u0442\u0438\u0439",
    "Fail": "\u041d\u0435\u0443\u0441\u043f\u0435\u0445",
    "Failure count": "\u041d\u0435\u0443\u0434\u0430\u0447",
    "Filters": "\u0424\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u044f",
    "Group": "\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430",
    "Link": "\u0421\u0432\u044f\u0437\u0430\u0442\u044c",
    "N/A": "\u041d/\u0414",
    "New option": "\u0422\u0435\u043a\u0441\u0442 \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u043e\u0442\u0432\u0435\u0442\u0430",
    "New question": "\u0422\u0435\u043a\u0441\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u0430",
    "No such reply count": "\u041d\u0435 \u043d\u0430\u0448\u043b\u043e\u0441\u044c \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u043e\u0442\u0432\u0435\u0442\u0430",
    "No suitable option": "\u041d\u0435\u0442 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0435\u0433\u043e \u0432\u0430\u0440\u0438\u0430\u043d\u0442\u0430 \u043e\u0442\u0432\u0435\u0442\u0430",
    "Node properties": "\u0421\u0432\u043e\u0439\u0441\u0442\u0432\u0430 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430",
    "Owner": "\u0412\u043b\u0430\u0434\u0435\u043b\u0435\u0446",
    "Permission": "\u0420\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u0438\u0435",
    "Range end": "\u041a\u043e\u043d\u0435\u0446 \u043f\u0435\u0440\u0438\u043e\u0434\u0430",
    "Range start": "\u041d\u0430\u0447\u0430\u043b\u043e \u043f\u0435\u0440\u0438\u043e\u0434\u0430",
    "Remove": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c",
    "Remove option": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043e\u0442\u0432\u0435\u0442",
    "Remove question": "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441",
    "Response options": "\u0412\u0430\u0440\u0438\u0430\u043d\u0442 \u043e\u0442\u0432\u0435\u0442\u0430 \u0440\u0435\u0441\u043f\u043e\u043d\u0434\u0435\u043d\u0442\u0430",
    "Revert": "\u041e\u0442\u043a\u0430\u0442\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f",
    "Run collecting stats": "\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0441\u043e \u0441\u0431\u043e\u0440\u043e\u043c \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438",
    "Run count": "\u0417\u0430\u043f\u0443\u0441\u043a\u043e\u0432 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f",
    "Save": "\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",
    "Scenario is not selected": "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439 \u043d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d",
    "Script": "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0439",
    "Script name": "\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",
    "Scripts": "\u0421\u0446\u0435\u043d\u0430\u0440\u0438\u0438",
    "Select node to change text": "\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f \u0434\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0442\u0435\u043a\u0441\u0442\u0430",
    "Success": "\u0423\u0441\u043f\u0435\u0445",
    "Success count": "\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0439 \u0443\u0441\u043f\u0435\u0445\u0430",
    "Success! Next Run.": "\u0423\u0441\u043f\u0435\u0448\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435! \u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043f\u0440\u043e\u0433\u043e\u043d \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f.",
    "There are unsaved data": "\u0423 \u0412\u0430\u0441 \u0435\u0441\u0442\u044c \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435!",
    "There's no changes to save": "\u041d\u0435\u0442 \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",
    "This is the entry of the script": "\u041d\u0430\u0447\u0430\u043b\u043e \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u044f",
    "Unknown error": "\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0430",
    "Unlink": "\u041e\u0442\u0441\u043e\u0435\u0434\u0438\u043d\u0438\u0442\u044c",
    "Unsuccessful termination. Next Run.": "\u041d\u0435\u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u0435. \u0421\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u043f\u0440\u043e\u0433\u043e\u043d.",
    "User": "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c",
    "Username": "\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",
    "View only": "\u0422\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440",
    "Your phrase": "\u0412\u0430\u0448\u0430 \u0444\u0440\u0430\u0437\u0430",
    "Zoom": "\u041c\u0430\u0441\u0448\u0442\u0430\u0431",
    "day": "\u0434\u0435\u043d\u044c",
    "hour": "\u0447\u0430\u0441",
    "month": "\u043c\u0435\u0441\u044f\u0446",
    "quarter": "\u043a\u0432\u0430\u0440\u0442\u0430\u043b",
    "week": "\u043d\u0435\u0434\u0435\u043b\u044f",
    "year": "\u0433\u043e\u0434"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value[django.pluralidx(count)];
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j E Y \u0433. G:i",
    "DATETIME_INPUT_FORMATS": [
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%Y",
      "%d.%m.%y %H:%M:%S",
      "%d.%m.%y %H:%M:%S.%f",
      "%d.%m.%y %H:%M",
      "%d.%m.%y",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j E Y \u0433.",
    "DATE_INPUT_FORMATS": [
      "%d.%m.%Y",
      "%d.%m.%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": "1",
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": "3",
    "SHORT_DATETIME_FORMAT": "d.m.Y H:i",
    "SHORT_DATE_FORMAT": "d.m.Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "G:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y \u0433."
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));

