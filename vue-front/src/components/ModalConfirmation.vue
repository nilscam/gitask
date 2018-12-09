<template>
  <!-- Modal -->
  <div class="modal fade" :id="id" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Supression de tâche</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Etes vous sûr de vouloir supprimer cette tâches ? Vous ne pourrez plus y accéder et elle ne sera plus visible par la communauté.
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
          <button @click="confirm" type="button" class="btn btn-danger" data-dismiss="modal">Supprimer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String
  },

  methods: {
    confirm() {
      this.$emit('confirm');
    }
  }
}
</script>
