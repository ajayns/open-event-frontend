import Ember from 'ember';
import FormMixin from 'open-event-frontend/mixins/form';

const { Component } = Ember;

export default Component.extend(FormMixin, {

  getValidationRules() {
    return {
      inline : true,
      delay  : false,
      on     : 'blur',
      fields : {
        name: {
          identifier : 'name',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter a name')
            }
          ]
        },
        title: {
          identifier : 'title',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter a title')
            }
          ]
        },
        url: {
          identifier : 'url',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter an url')
            }
          ]
        },
        place: {
          identifier : 'place',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please select a place')
            }
          ]
        },
        position: {
          identifier : 'position',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter a position')
            }
          ]
        },
        language: {
          identifier : 'language',
          rules      : [
            {
              type   : 'empty',
              prompt : this.l10n.t('Please enter a language')
            }
          ]
        }
      }
    };
  },

  actions: {
    submit(data) {
      this.onValid(() => {
        this.sendAction('save', data);
      });
    },
    deletePage(data) {
      if (!this.get('isCreate')) {
        data.destroyRecord();
        this.set('isFormOpen', false);
      }
    },
    close() {
      if (this.get('isCreate')) {
        this.set('isFormOpen', false);
      }
    }
  }
});
