<script lang="ts">
import { DanceStyle } from './models';

let modern = new DanceStyle("Modern");
modern.addMedal("Jane", "Bronze");
modern.addMedal("Bob", "Silver");
modern.addMedal("Jill", "Star");
modern.addMedal("Janice", "Bronze");
modern.addMedal("Jane", "Gold");

let newVogue = new DanceStyle("New Vogue");
newVogue.addMedal("Jane", "Silver");
newVogue.addMedal("Jane", "Gold");
newVogue.addMedal("Bob", "Silver");
newVogue.addMedal("Jill", "Star");



console.log(modern, newVogue)

</script>

<main>

<table>
  <tr><th>Medals</th><th>Modern</th><th>New Vogue</th></tr>
  <tr>
    <td>Bronze</td>
    <td>
      {#each modern.bronzeMedals as dancer} 
        <p>{dancer}</p>
      {/each}
    </td> <!-- end of modern bronze -->
    <td>
      {#each newVogue.bronzeMedals as dancer} 
        <p>{dancer}</p>
      {/each}
    </td> <!-- end of New Vogue bronze -->
  </tr> 
  <tr>
    <td>Silver</td>
    <td>    
      {#each modern.silverMedals as dancer} 
        <p>{dancer}</p>
      {/each}
    </td> <!-- end of modern silver -->
    <td>
      {#each newVogue.silverMedals as dancer} 
        <p>{dancer}</p>
      {/each}
    </td> <!-- end of new Vogue silver -->
  </tr>
  <tr>
    <td>Gold</td>
    <td>
      {#each modern.goldMedals as dancer} 
        <p>{dancer}</p>
      {/each}
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Star</td>
    <td>
      {#each modern.starMedals as dancer} 
        <p>{dancer}</p>
      {/each}
    </td>
    <td></td>
  </tr>
</table>

</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }

  table, tr, th, td {
    border: 1px solid black
  }

</style>
