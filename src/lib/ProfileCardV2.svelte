<script>
    let { name = $bindable(), avatar, followers = 0 } = $props();
</script>

<div class="mt-10">
  <img src={avatar} alt={name} />
  <h2>{name}</h2>
  <p>{followers} followers</p>
</div>